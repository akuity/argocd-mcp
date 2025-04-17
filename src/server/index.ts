import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import packageJSON from "../../package.json";

export const createServer = () => {
  const server = new McpServer({
    name: packageJSON.name,
    version: packageJSON.version,
  });

  return server;
};
