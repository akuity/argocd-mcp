# Argo CD MCP Server

An implementation of [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server for [Argo CD](https://argo-cd.readthedocs.io/en/stable/), enabling AI assistants to interact with your Argo CD applications through natural language. This server allows for seamless integration with Visual Studio Code and other MCP clients through both stdio and Server-Sent Events (SSE) transport protocols.

## Features

- **Transport Protocols**: Supports both stdio and SSE transport modes for flexible integration with different clients
- **Complete Argo CD API Integration**: Provides comprehensive access to Argo CD resources and operations
- **AI Assistant Ready**: Pre-configured tools for AI assistants to interact with Argo CD in natural language

## Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm package manager (for development)
- Argo CD instance with API access

### Usage with VSCode

1. Create a `.vscode/mcp.json` file in your project:
   ```json
   {
       "inputs": [
           {
               "id": "argocd-base-url",
               "type": "promptString",
               "description": "Enter the ArgoCD base URL",
               "password": false
           },
           {
               "id": "argocd-api-token",
               "type": "promptString",
               "description": "Enter the ArgoCD API token",
               "password": true
           }
       ],
       "servers": {
           "argocd-mcp-server-stdio": {
               "type": "stdio",
               "command": "npx",
               "args": [
                   "argocd-mcp-server",
                   "stdio"
               ],
               "env": {
                   "ARGOCD_BASE_URL": "${input:argocd-base-url}",
                   "ARGOCD_API_TOKEN": "${input:argocd-api-token}"
               }
           }
       }
   }
   ```

2. Start a conversation with an AI assistant in VS Code that supports MCP.

### Usage with Claude Desktop

1. Create a `claude_desktop_config.json` configuration file:
   ```json
   {
     "mcpServers": {
       "argocd-mcp": {
         "command": "npx",
         "args": ["argocd-mcp-server", "stdio"],
         "env": {
           "ARGOCD_BASE_URL": "https://your-argocd-server.com",
           "ARGOCD_API_TOKEN": "your_argocd_token"
         }
       }
     }
   }
   ```

2. Configure Claude Desktop to use this configuration file in settings.

## Available Tools

The server provides the following ArgoCD management tools:

### Application Management
- `list_applications`: List and filter all applications
- `get_application`: Get detailed information about a specific application
- `create_application`: Create a new application
- `update_application`: Update an existing application
- `delete_application`: Delete an application
- `sync_application`: Trigger a sync operation on an application

### Resource Management
- `get_application_resource_tree`: Get the resource tree for a specific application
- `get_application_managed_resources`: Get managed resources for a specific application
- `get_application_workload_logs`: Get logs for application workloads (Pods, Deployments, etc.)
- `get_resource_events`: Get events for resources managed by an application
- `get_resource_actions`: Get available actions for resources
- `run_resource_action`: Run an action on a resource

## For Development

1. Clone the repository:
```bash
git clone https://github.com/akuityio/argocd-mcp-server.git
cd argocd-mcp-server
```

2. Install project dependencies:
```bash
pnpm install
```

3. Start the development server with hot reloading enabled:
```bash
# For SSE mode with hot reloading
pnpm run dev
```
Once the server is running, you can utilize the MCP server within Visual Studio Code or other MCP client.
