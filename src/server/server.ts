import { McpServer, ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';

import packageJSON from '../../package.json' with { type: 'json' };
import { ArgoCDClient } from '../argocd/client.js';
import { z, ZodRawShape } from 'zod';
import {
  V1alpha1Application,
  V1alpha1ApplicationList,
  V1alpha1ResourceResult
} from '../types/argocd-types.js';
import {
  ApplicationNamespaceSchema,
  ApplicationSchema,
  ResourceRefSchema
} from '../shared/models/schema.js';

type ServerInfo = {
  argocdBaseUrl: string;
  argocdApiToken: string;
};

export class Server extends McpServer {
  private argocdClient: ArgoCDClient;

  constructor(serverInfo: ServerInfo) {
    super({
      name: packageJSON.name,
      version: packageJSON.version
    });
    this.argocdClient = new ArgoCDClient(serverInfo.argocdBaseUrl, serverInfo.argocdApiToken);

    const isReadOnly =
      String(process.env.MCP_READ_ONLY ?? '')
        .trim()
        .toLowerCase() === 'true';

    // Always register read/query tools
    this.addJsonOutputTool(
      'list_applications',
      'list_applications returns list of applications with optional filtering applied server-side',
      {
        search: z
          .string()
          .optional()
          .describe(
            'Partial match on application name (case-insensitive). Does not support glob patterns.'
          ),
        project: z.string().optional().describe('Filter by Argo CD project (spec.project)'),
        appNamespace: z
          .string()
          .optional()
          .describe('Filter by Argo CD application namespace (metadata.namespace)'),
        destinationNamespace: z
          .string()
          .optional()
          .describe('Filter by Kubernetes destination namespace (spec.destination.namespace)'),
        destinationServer: z
          .string()
          .optional()
          .describe('Filter by destination server URL (spec.destination.server)'),
        destinationName: z
          .string()
          .optional()
          .describe('Filter by destination cluster name (spec.destination.name)'),
        healthStatus: z
          .string()
          .optional()
          .describe('Filter by application health status (status.health.status)'),
        syncStatus: z
          .string()
          .optional()
          .describe('Filter by application sync status (status.sync.status)'),
        label: z
          .string()
          .optional()
          .describe(
            'Filter by label. Accepts "key" (presence) or "key=value" (exact match) on metadata.labels.'
          )
      },
      async ({
        search,
        project,
        appNamespace,
        destinationNamespace,
        destinationServer,
        destinationName,
        healthStatus,
        syncStatus,
        label
      }) => {
        const applications: V1alpha1ApplicationList = await this.argocdClient.listApplications();

        const normalizedSearch = (search ?? '').trim().toLowerCase();
        const normalizedProject = (project ?? '').trim();
        const normalizedAppNs = (appNamespace ?? '').trim();
        const normalizedDestNs = (destinationNamespace ?? '').trim();
        const normalizedDestServer = (destinationServer ?? '').trim();
        const normalizedDestName = (destinationName ?? '').trim();
        const normalizedHealth = (healthStatus ?? '').trim();
        const normalizedSync = (syncStatus ?? '').trim();
        const normalizedLabel = (label ?? '').trim();

        const [labelKey, labelValue] = (() => {
          if (!normalizedLabel) return [undefined, undefined] as const;
          const idx = normalizedLabel.indexOf('=');
          if (idx === -1) return [normalizedLabel, undefined] as const;
          return [normalizedLabel.slice(0, idx), normalizedLabel.slice(idx + 1)] as const;
        })();

        const hasAnyFilter =
          normalizedSearch ||
          normalizedProject ||
          normalizedAppNs ||
          normalizedDestNs ||
          normalizedDestServer ||
          normalizedDestName ||
          normalizedHealth ||
          normalizedSync ||
          labelKey;

        if (!hasAnyFilter) {
          return applications;
        }

        const filteredItems = (applications.items ?? []).filter((app) => {
          const labels = app?.metadata?.labels ?? {};
          const name = app?.metadata?.name ?? '';
          const ns = app?.metadata?.namespace ?? '';
          const proj = app?.spec?.project ?? '';
          const destNs = app?.spec?.destination?.namespace ?? '';
          const destServer = app?.spec?.destination?.server ?? '';
          const destName = app?.spec?.destination?.name ?? '';
          const health = app?.status?.health?.status ?? '';
          const sync = app?.status?.sync?.status ?? '';

          if (normalizedSearch && !name.toLowerCase().includes(normalizedSearch)) return false;
          if (normalizedProject && proj !== normalizedProject) return false;
          if (normalizedAppNs && ns !== normalizedAppNs) return false;
          if (normalizedDestNs && destNs !== normalizedDestNs) return false;
          if (normalizedDestServer && destServer !== normalizedDestServer) return false;
          if (normalizedDestName && destName !== normalizedDestName) return false;
          if (normalizedHealth && health !== normalizedHealth) return false;
          if (normalizedSync && sync !== normalizedSync) return false;

          if (labelKey) {
            if (!(labelKey in labels)) return false;
            if (labelValue !== undefined && labels[labelKey] !== labelValue) return false;
          }

          return true;
        });

        return {
          items: filteredItems,
          metadata: applications.metadata
        };
      }
    );
    this.addJsonOutputTool(
      'get_application',
      'get_application returns application by application name',
      { applicationName: z.string() },
      async ({ applicationName }) => await this.argocdClient.getApplication(applicationName)
    );
    this.addJsonOutputTool(
      'get_application_resource_tree',
      'get_application_resource_tree returns resource tree for application by application name',
      { applicationName: z.string() },
      async ({ applicationName }) =>
        await this.argocdClient.getApplicationResourceTree(applicationName)
    );
    this.addJsonOutputTool(
      'get_application_managed_resources',
      'get_application_managed_resources returns managed resources for application by application name with optional filtering. Use filters to avoid token limits with large applications. Examples: kind="ConfigMap" for config maps only, namespace="production" for specific namespace, or combine multiple filters.',
      {
        applicationName: z.string(),
        kind: z
          .string()
          .optional()
          .describe(
            'Filter by Kubernetes resource kind (e.g., "ConfigMap", "Secret", "Deployment")'
          ),
        namespace: z.string().optional().describe('Filter by Kubernetes namespace'),
        name: z.string().optional().describe('Filter by resource name'),
        version: z.string().optional().describe('Filter by resource API version'),
        group: z.string().optional().describe('Filter by API group'),
        appNamespace: z.string().optional().describe('Filter by Argo CD application namespace'),
        project: z.string().optional().describe('Filter by Argo CD project')
      },
      async ({ applicationName, kind, namespace, name, version, group, appNamespace, project }) => {
        const filters = {
          ...(kind && { kind }),
          ...(namespace && { namespace }),
          ...(name && { name }),
          ...(version && { version }),
          ...(group && { group }),
          ...(appNamespace && { appNamespace }),
          ...(project && { project })
        };
        return await this.argocdClient.getApplicationManagedResources(
          applicationName,
          Object.keys(filters).length > 0 ? filters : undefined
        );
      }
    );
    this.addJsonOutputTool(
      'get_application_workload_logs',
      'get_application_workload_logs returns logs for application workload (Deployment, StatefulSet, Pod, etc.) by application name and resource ref',
      {
        applicationName: z.string(),
        applicationNamespace: ApplicationNamespaceSchema,
        resourceRef: ResourceRefSchema
      },
      async ({ applicationName, applicationNamespace, resourceRef }) =>
        await this.argocdClient.getWorkloadLogs(
          applicationName,
          applicationNamespace,
          resourceRef as V1alpha1ResourceResult
        )
    );
    this.addJsonOutputTool(
      'get_application_events',
      'get_application_events returns events for application by application name',
      { applicationName: z.string() },
      async ({ applicationName }) => await this.argocdClient.getApplicationEvents(applicationName)
    );
    this.addJsonOutputTool(
      'get_resource_events',
      'get_resource_events returns events for a resource that is managed by an application',
      {
        applicationName: z.string(),
        applicationNamespace: ApplicationNamespaceSchema,
        resourceUID: z.string(),
        resourceNamespace: z.string(),
        resourceName: z.string()
      },
      async ({
        applicationName,
        applicationNamespace,
        resourceUID,
        resourceNamespace,
        resourceName
      }) =>
        await this.argocdClient.getResourceEvents(
          applicationName,
          applicationNamespace,
          resourceUID,
          resourceNamespace,
          resourceName
        )
    );
    this.addJsonOutputTool(
      'get_resource_actions',
      'get_resource_actions returns actions for a resource that is managed by an application',
      {
        applicationName: z.string(),
        applicationNamespace: ApplicationNamespaceSchema,
        resourceRef: ResourceRefSchema
      },
      async ({ applicationName, applicationNamespace, resourceRef }) =>
        await this.argocdClient.getResourceActions(
          applicationName,
          applicationNamespace,
          resourceRef as V1alpha1ResourceResult
        )
    );

    // Only register modification tools if not in read-only mode
    if (!isReadOnly) {
      this.addJsonOutputTool(
        'create_application',
        'create_application creates application',
        { application: ApplicationSchema },
        async ({ application }) =>
          await this.argocdClient.createApplication(application as V1alpha1Application)
      );
      this.addJsonOutputTool(
        'update_application',
        'update_application updates application',
        { applicationName: z.string(), application: ApplicationSchema },
        async ({ applicationName, application }) =>
          await this.argocdClient.updateApplication(
            applicationName,
            application as V1alpha1Application
          )
      );
      this.addJsonOutputTool(
        'delete_application',
        'delete_application deletes application',
        { applicationName: z.string() },
        async ({ applicationName }) => await this.argocdClient.deleteApplication(applicationName)
      );
      this.addJsonOutputTool(
        'sync_application',
        'sync_application syncs application',
        { applicationName: z.string() },
        async ({ applicationName }) => await this.argocdClient.syncApplication(applicationName)
      );
      this.addJsonOutputTool(
        'run_resource_action',
        'run_resource_action runs an action on a resource',
        {
          applicationName: z.string(),
          applicationNamespace: ApplicationNamespaceSchema,
          resourceRef: ResourceRefSchema,
          action: z.string()
        },
        async ({ applicationName, applicationNamespace, resourceRef, action }) =>
          await this.argocdClient.runResourceAction(
            applicationName,
            applicationNamespace,
            resourceRef as V1alpha1ResourceResult,
            action
          )
      );
    }
  }

  private addJsonOutputTool<Args extends ZodRawShape, T>(
    name: string,
    description: string,
    paramsSchema: Args,
    cb: (...cbArgs: Parameters<ToolCallback<Args>>) => T
  ) {
    this.tool(name, description, paramsSchema as ZodRawShape, async (...args) => {
      try {
        const result = await cb.apply(this, args as Parameters<ToolCallback<Args>>);
        return {
          isError: false,
          content: [{ type: 'text', text: JSON.stringify(result) }]
        };
      } catch (error) {
        return {
          isError: true,
          content: [{ type: 'text', text: error instanceof Error ? error.message : String(error) }]
        };
      }
    });
  }
}

export const createServer = (serverInfo: ServerInfo) => {
  return new Server(serverInfo);
};
