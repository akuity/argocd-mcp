import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import express from 'express';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { logger } from '../logging/logging.js';

export const connectStdioTransport = (server: McpServer) => {
  logger.info('Connecting to stdio transport');
  server.connect(new StdioServerTransport());
};

export const connectSSETransport = (server: McpServer, port: number) => {
  const app = express();
  const transports: { [sessionId: string]: SSEServerTransport } = {};

  app.get('/sse', async (_, res) => {
    const transport = new SSEServerTransport('/messages', res);
    transports[transport.sessionId] = transport;
    res.on('close', () => {
      delete transports[transport.sessionId];
    });
    await server.connect(transport);
  });

  app.post('/messages', async (req, res) => {
    const sessionId = req.query.sessionId as string;
    const transport = transports[sessionId];
    if (transport) {
      await transport.handlePostMessage(req, res);
    } else {
      res.status(400).send(`No transport found for sessionId: ${sessionId}`);
    }
  });

  logger.info(`Connecting to SSE transport on port: ${port}`);
  app.listen(port);
};
