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
      {},
      async () => await this.argocdClient.getApplications()
    );
    this.addJsonOutputTool(
      'get_application',
      'get_application returns application by application name',
      { name: z.string() },
      async ({ name }) => await this.argocdClient.getApplication(name)
    );
    this.addJsonOutputTool(
      'get_application_resource_tree',
      'get_application_resource_tree returns resource tree for application by application name',
      { name: z.string() },
      async ({ name }) => await this.argocdClient.getApplicationResourceTree(name)
    );
    this.addJsonOutputTool(
      'get_application_managed_resources',
      'get_application_managed_resources returns managed resources for application by application name',
      { name: z.string() },
      async ({ name }) => await this.argocdClient.getApplicationManagedResources(name)
    );
    this.addJsonOutputTool(
      'get_application_resource_events',
      'get_application_resource_events returns resource events for application by application name',
      { name: z.string() },
      async ({ name }) => await this.argocdClient.getResourceEvents(name)
    );
    this.addJsonOutputTool(
      'get_application_resource_actions',
      'get_application_resource_actions returns resource actions for application by application name',
      { name: z.string() },
      async ({ name }) => await this.argocdClient.getResourceActions(name)
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
