import {
  Application,
  ApplicationList,
  ApplicationTree,
  EventList,
  LogEntry,
  ResourceAction,
  ResourceDiff,
  ResourceRef
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

  public async listApplications(params?: { search?: string }) {
    const { body } = await this.client.get<ApplicationList>(`/api/v1/applications`, params);
    return body;
  }

  public async getApplication(applicationName: string) {
    const { body } = await this.client.get<Application>(`/api/v1/applications/${applicationName}`);
    return body;
  }

  public async createApplication(application: Application) {
    const { body } = await this.client.post<Application, Application>(
      `/api/v1/applications`,
      application
    );
    return body;
  }

  public async updateApplication(applicationName: string, application: Application) {
    const { body } = await this.client.put<Application, Application>(
      `/api/v1/applications/${applicationName}`,
      application
    );
    return body;
  }

  public async deleteApplication(applicationName: string) {
    const { body } = await this.client.delete<Application>(
      `/api/v1/applications/${applicationName}`
    );
    return body;
  }

  public async syncApplication(applicationName: string) {
    const { body } = await this.client.post<Application, Application>(
      `/api/v1/applications/${applicationName}/sync`
    );
    return body;
  }

  public async getApplicationResourceTree(applicationName: string) {
    const { body } = await this.client.get<ApplicationTree>(
      `/api/v1/applications/${applicationName}/resource-tree`
    );
    return body;
  }

  public async getApplicationManagedResources(applicationName: string) {
    const { body } = await this.client.get<{ items: ResourceDiff[] }>(
      `/api/v1/applications/${applicationName}/managed-resources`
    );
    return body;
  }

  public async getApplicationLogs(applicationName: string) {
    const logs: LogEntry[] = [];
    await this.client.getStream<LogEntry>(`/api/v1/applications/${applicationName}/logs`, (chunk) =>
      logs.push(chunk)
    );
    return logs;
  }

  public async getPodLogs(applicationName: string, podName: string) {
    const logs: LogEntry[] = [];
    await this.client.getStream<LogEntry>(
      `/api/v1/applications/${applicationName}/pods/${podName}/logs`,
      (chunk) => logs.push(chunk)
    );
    return logs;
  }

  public async getApplicationEvents(applicationName: string) {
    const { body } = await this.client.get<EventList>(
      `/api/v1/applications/${applicationName}/events`
    );
    return body;
  }

  public async getResourceEvents(
    applicationName: string,
    applicationNamespace: string,
    resourceUID: string,
    resourceNamespace: string,
    resourceName: string
  ) {
    const { body } = await this.client.get<EventList>(
      `/api/v1/applications/${applicationName}/events?appNamespace=${applicationNamespace}&resourceUID=${resourceUID}&resourceNamespace=${resourceNamespace}&resourceName=${resourceName}`
    );
    return body;
  }

  public async getResourceActions(
    applicationName: string,
    applicationNamespace: string,
    resourceRef: ResourceRef
  ) {
    const { body } = await this.client.get<{ actions: ResourceAction[] }>(
      `/api/v1/applications/${applicationName}/resource/actions?appNamespace=${applicationNamespace}&namespace=${resourceRef.namespace}&group=${resourceRef.group}&kind=${resourceRef.kind}&resourceName=${resourceRef.name}&version=`
    );
    return body;
  }

  public async runResourceAction(
    applicationName: string,
    applicationNamespace: string,
    resourceRef: ResourceRef,
    action: string
  ) {
    const { body } = await this.client.post<string, Application>(
      `/api/v1/applications/${applicationName}/resource/actions?appNamespace=${applicationNamespace}&namespace=${resourceRef.namespace}&group=${resourceRef.group}&kind=${resourceRef.kind}&resourceName=${resourceRef.name}&version=`,
      action
    );
    return body;
  }
}
