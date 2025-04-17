import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { createServer } from "../server/server.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export const cmd = () => {
  const exe = yargs(hideBin(process.argv));

  exe.command(
    "stdio",
    "Start ArgoCD MCP server using stdio.",
    () => {},
    () => {
      const server = createServer();
      server.connect(new StdioServerTransport());
    },
  );

  exe.command(
    "sse",
    "Start ArgoCD MCP server using SSE.",
    (yargs) => {
      yargs.option("port", {
        type: "number",
        default: 8080,
      });
    },
    () => {},
  );

  exe.demandCommand().parseSync();
};
