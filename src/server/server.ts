import { McpServer, ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import { Implementation } from '@modelcontextprotocol/sdk/types.js';

import packageJSON from '../../package.json' with { type: 'json' };
import { ArgoCDClient } from '../argocd/client.js';
import { z, ZodRawShape } from 'zod';

export class Server extends McpServer {
  private argocdClient: ArgoCDClient;

  constructor(serverInfo: Implementation) {
    super(serverInfo);
    this.argocdClient = new ArgoCDClient(
      process.env.ARGOCD_BASE_URL || '',
      process.env.ARGOCD_API_TOKEN || ''
    );

    this.addJsonOutputTool(
      'get_applications',
      'get_applications returns list of applications',
      {
        search: z.string().describe('Search applications by name, optional')
      },
      async ({ search }) => await this.argocdClient.getApplications({ search })
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
      'get_application_managed_resources returns managed resources for application by application name',
      { applicationName: z.string() },
      async ({ applicationName }) =>
        await this.argocdClient.getApplicationManagedResources(applicationName)
    );
    this.addJsonOutputTool(
      'get_application_logs',
      'get_application_logs returns logs for application by application name',
      { applicationName: z.string() },
      async ({ applicationName }) => await this.argocdClient.getApplicationLogs(applicationName)
    );
    this.addJsonOutputTool(
      'get_application_pod_logs',
      'get_application_pod_logs returns logs for application pod by application name and pod name',
      { applicationName: z.string(), podName: z.string() },
      async ({ applicationName, podName }) =>
        await this.argocdClient.getPodLogs(applicationName, podName)
    );
    this.addJsonOutputTool(
      'get_application_resource_events',
      'get_application_resource_events returns resource events for application by application name',
      { applicationName: z.string() },
      async ({ applicationName }) => await this.argocdClient.getResourceEvents(applicationName)
    );
    this.addJsonOutputTool(
      'get_application_resource_actions',
      'get_application_resource_actions returns resource actions for application by application name',
      { applicationName: z.string() },
      async ({ applicationName }) => await this.argocdClient.getResourceActions(applicationName)
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

export const createServer = () => {
  const server = new Server({
    name: packageJSON.name,
    version: packageJSON.version
  });

  return server;
};
