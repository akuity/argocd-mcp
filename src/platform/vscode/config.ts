import { join } from 'path';
import { homedir } from 'os';
import { ConfigManager, MCPConfig } from '../base.js';

interface VSCodeServerConfig {
  type: string;
  command: string;
  args: string[];
  env?: Record<string, string>;
}

// VSCode-specific key
const serversKey = 'servers';

interface VSCodeConfig extends MCPConfig {
  [serversKey]: Record<string, VSCodeServerConfig>;
}

export class VSCodeConfigManager extends ConfigManager<VSCodeConfig, VSCodeServerConfig> {
  protected configPath: string;

  constructor(workspace?: boolean) {
    super();

    if (workspace) {
      this.configPath = join(process.cwd(), '.vscode', 'mcp.json');
    } else {
      const home = homedir();
      const platform = process.platform;

      switch (platform) {
        case 'darwin':
          this.configPath = join(
            home,
            'Library',
            'Application Support',
            'Code',
            'User',
            'mcp.json'
          );
          break;
        case 'win32':
          this.configPath = join(home, 'AppData', 'Roaming', 'Code', 'User', 'mcp.json');
          break;
        case 'linux':
          this.configPath = join(home, '.config', 'Code', 'User', 'mcp.json');
          break;
        default:
          throw new Error(`platform not supported: ${platform}`);
      }
    }
  }

  protected getDefaultConfig(): VSCodeConfig {
    return { [serversKey]: {} };
  }

  protected getServersKey() {
    return serversKey;
  }

  protected createServerConfig(baseUrl: string, apiToken: string): VSCodeServerConfig {
    const serverConfig: VSCodeServerConfig = {
      type: 'stdio',
      command: 'npx',
      args: ['argocd-mcp@latest', 'stdio'],
      env: {
        ARGOCD_BASE_URL: baseUrl,
        ARGOCD_API_TOKEN: apiToken
      }
    };

    return serverConfig;
  }
}
