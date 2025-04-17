import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Implementation } from "@modelcontextprotocol/sdk/types.js";

import packageJSON from "../../package.json" with { type: "json" };
import { ArgoCDClient } from "../argocd/client.js";
import { env } from "process";

const ARGOCD_BASE_URL = env.ARGOCD_BASE_URL || "";
const ARGOCD_API_TOKEN = env.ARGOCD_API_TOKEN || "";

export class Server extends McpServer {
  private argocdClient: ArgoCDClient;

  constructor(serverInfo: Implementation) {
    super(serverInfo);
    this.argocdClient = new ArgoCDClient(ARGOCD_BASE_URL, ARGOCD_API_TOKEN);

    this.tool("getApplications", "Get all applications", {}, async () => {
      const applications = await this.argocdClient.getApplications();
      return {
        content: [{ type: "text", text: JSON.stringify(applications) }],
      };
    });
  }
}

export const createServer = () => {
  const server = new Server({
    name: packageJSON.name,
    version: packageJSON.version,
  });

  return server;
};
