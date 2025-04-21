import { McpServer, ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';

import packageJSON from '../../package.json' with { type: 'json' };
import { ArgoCDClient } from '../argocd/client.js';
import { z, ZodRawShape } from 'zod';
import { Application, ResourceRef } from '../shared/models/models.js';
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

    this.addJsonOutputTool(
      'list_applications',
      'list_applications returns list of applications',
      {
        search: z.string().describe('Search applications by name, optional')
      },
      async ({ search }) => await this.argocdClient.listApplications({ search })
    );
    this.addJsonOutputTool(
      'get_application',
      'get_application returns application by application name',
      { applicationName: z.string() },
      async ({ applicationName }) => await this.argocdClient.getApplication(applicationName)
    );
    this.addJsonOutputTool(
      'create_application',
      'create_application creates application',
      { application: ApplicationSchema },
      async ({ application }) =>
        await this.argocdClient.createApplication(application as Application)
    );
    this.addJsonOutputTool(
      'update_application',
      'update_application updates application',
      { applicationName: z.string(), application: ApplicationSchema },
      async ({ applicationName, application }) =>
        await this.argocdClient.updateApplication(applicationName, application as Application)
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
      'get_application_resource_tree',
      'get_application_resource_tree returns resource tree for application by application name',
      { applicationName: z.string() },
      async ({ applicationName }) =>
        await this.argocdClient.getApplicationResourceTree(applicationName)
    );
    this.addJsonOutputTool(
      'get_application_managed_resources',
      'get_application_managed_resources returns managed resources for application by application name',
      { applicationName: z.string() },
      async ({ applicationName }) =>
        await this.argocdClient.getApplicationManagedResources(applicationName)
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
          resourceRef as ResourceRef
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
          resourceRef as ResourceRef
        )
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
          resourceRef as ResourceRef,
          action
        )
    );
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
