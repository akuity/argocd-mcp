import {
  Application,
  ApplicationList,
  ApplicationTree,
  EventList,
  ResourceAction,
  ResourceDiff
} from '../shared/models/models.js';
import { HttpClient } from './http.js';

export class ArgoCDClient {
  private baseUrl: string;
  private apiToken: string;
  private client: HttpClient;

  constructor(baseUrl: string, apiToken: string) {
    this.baseUrl = baseUrl;
    this.apiToken = apiToken;
    this.client = new HttpClient(this.baseUrl, this.apiToken);
  }

  public async getApplications() {
    const { body } = await this.client.get<ApplicationList>(`/api/v1/applications`);
    return body;
  }

  public async getApplication(name: string) {
    const { body } = await this.client.get<Application>(`/api/v1/applications/${name}`);
    return body;
  }

  public async getApplicationResourceTree(name: string) {
    const { body } = await this.client.get<ApplicationTree>(
      `/api/v1/applications/${name}/resource-tree`
    );
    return body;
  }

  public async getApplicationManagedResources(name: string) {
    const { body } = await this.client.get<{ items: ResourceDiff[] }>(
      `/api/v1/applications/${name}/managed-resources`
    );
    return body;
  }

  public async getWorkloadLogs() {}

  public async getResourceEvents(name: string) {
    const { body } = await this.client.get<EventList>(`/api/v1/applications/${name}/events`);
    return body;
  }

  public async getResourceActions(name: string) {
    const { body } = await this.client.get<{ actions: ResourceAction[] }>(
      `/api/v1/applications/${name}/resource/actions`
    );
    return body;
  }
}
