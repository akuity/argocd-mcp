import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { connectStdioTransport, connectSSETransport } from '../server/transport.js';

export const cmd = () => {
  const exe = yargs(hideBin(process.argv));

  exe.command(
    'stdio',
    'Start ArgoCD MCP server using stdio.',
    () => {},
    () => connectStdioTransport()
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
    ({ port }) => connectSSETransport(port)
  );

  exe.demandCommand().parseSync();
};
