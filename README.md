# ArgoCD MCP Server

A Model Context Protocol (MCP) server implementation for ArgoCD, enabling seamless integration with Visual Studio Code through both stdio and SSE (Server-Sent Events) transport protocols.

## Features

- Integration with ArgoCD API
- Support for both stdio and SSE transport modes

## Development

1. Clone the repository:
```bash
git clone https://github.com/akuityio/argocd-mcp-server.git
cd argocd-mcp-server
```

2. Install project dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory with your ArgoCD configuration:
```env
# Uncomment to disable SSL verification (not recommended for production)
# NODE_TLS_REJECT_UNAUTHORIZED=0

ARGOCD_BASE_URL=<your_argocd_url>
ARGOCD_API_TOKEN=<your_api_token>
```

4. Start the development server with hot reloading enabled:
```bash
pnpm run dev
```

Once the server is running, you can utilize the MCP server within Visual Studio Code or other MCP client.
