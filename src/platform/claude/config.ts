import { join } from 'path';
import { homedir } from 'os';
import { ConfigManager, MCPConfig } from '../base.js';

interface ClaudeServerConfig {
  command: string;
  args: string[];
  env?: Record<string, string>;
}

// Claude-specific key
const serversKey = 'mcpServers';

interface ClaudeConfig extends MCPConfig {
  [serversKey]: Record<string, ClaudeServerConfig>;
}

export class ClaudeConfigManager extends ConfigManager<ClaudeConfig, ClaudeServerConfig> {
  protected configPath: string;

  constructor() {
    super();
    const home = homedir();
    const platform = process.platform;

    switch (platform) {
      case 'darwin':
        this.configPath = join(
          home,
          'Library',
          'Application Support',
          'Claude',
          'claude_desktop_config.json'
        );
        break;
      case 'win32':
        this.configPath = join(home, 'AppData', 'Roaming', 'Claude', 'claude_desktop_config.json');
        break;
      case 'linux':
        this.configPath = join(home, '.config', 'Claude', 'claude_desktop_config.json');
        break;
      default:
        throw new Error(`platform not supported: ${platform}`);
    }
  }

  protected getDefaultConfig(): ClaudeConfig {
    return { [serversKey]: {} };
  }

  protected getServersKey() {
    return serversKey;
  }

  protected createServerConfig(baseUrl: string, apiToken: string): ClaudeServerConfig {
    const serverConfig: ClaudeServerConfig = {
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
