import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { createServer } from '../server/server.js';
import { connectStdioTransport, connectSSETransport } from '../server/transport.js';

export const cmd = () => {
  const exe = yargs(hideBin(process.argv));

  exe.command(
    'stdio',
    'Start ArgoCD MCP server using stdio.',
    () => {},
    () => {
      const server = createServer();
      connectStdioTransport(server);
    }
  );

  exe.command(
    'sse',
    'Start ArgoCD MCP server using SSE.',
    (yargs) => {
      return yargs.option('port', {
        type: 'number',
        default: 3000
      });
    },
    ({ port }) => {
      const server = createServer();
      connectSSETransport(server, port);
    }
  );

  exe.demandCommand().parseSync();
};
