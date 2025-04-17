import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server/server.js";

const server = createServer();
const transport = new StdioServerTransport();

server.connect(transport);
