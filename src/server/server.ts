import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import packageJSON from "../../package.json" with { type: "json" };

export const createServer = () => {
  const server = new McpServer({
    name: packageJSON.name,
    version: packageJSON.version,
  });

  server.tool("add", { a: z.number(), b: z.number() }, async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }],
  }));

  return server;
};
