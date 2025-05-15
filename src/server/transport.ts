import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import express from 'express';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { logger } from '../logging/logging.js';
import { createServer } from './server.js';

export const connectStdioTransport = () => {
  const baseUrl = process.env.ARGOCD_BASE_URL;
  const apiToken = process.env.ARGOCD_API_TOKEN;
  
  if (!baseUrl || !apiToken) {
    console.error('Environment variables ARGOCD_BASE_URL and ARGOCD_API_TOKEN must be set.');
    process.exit(1);
  }

  const server = createServer({
    argocdBaseUrl: baseUrl,
    argocdApiToken: apiToken
  });

  logger.info('Connecting to stdio transport');
  server.connect(new StdioServerTransport());
};

export const connectSSETransport = (port: number) => {
  const app = express();
  const transports: { [sessionId: string]: SSEServerTransport } = {};

  app.get('/sse', async (req, res) => {
    const baseUrl =
      (req.headers['x-argocd-base-url'] as string | undefined) ||
      process.env.ARGOCD_BASE_URL;

    const apiToken =
      (req.headers['x-argocd-api-token'] as string | undefined) ||
      process.env.ARGOCD_API_TOKEN;

    if (!baseUrl || !apiToken) {
      res.status(400).send('ARGOCD_BASE_URL and ARGOCD_API_TOKEN must be provided via headers or environment variables.');
      return;
    }

    const server = createServer({
      argocdBaseUrl: baseUrl,
      argocdApiToken: apiToken
    });

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
