import {
  ApplicationLogEntry,
  V1alpha1Application,
  V1alpha1ApplicationList,
  V1alpha1ApplicationTree,
  V1EventList,
  V1alpha1ResourceAction,
  V1alpha1ResourceDiff,
  V1alpha1ResourceResult
} from '../types/argocd-types.js';
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
    const { body } = await this.client.get<V1alpha1ApplicationList>(`/api/v1/applications`);
    
    // If no search parameter, return all applications with filtered fields
    const filteredItems = body.items?.map((app) => ({
      metadata: {
        name: app.metadata?.name,
        namespace: app.metadata?.namespace,
        labels: app.metadata?.labels
      },
      status: {
        health: app.status?.health,
        sync: app.status?.sync
      }
    })) || [];

    if (!params?.search) {
      return { items: filteredItems };
    }
    
    // Full-text search across filtered fields and subfields
    const searchTerm = params.search.toLowerCase();
    
    const searchMatches = filteredItems.filter((app) => {
      // Convert the filtered app object to a string for full-text search
      const searchableContent = JSON.stringify(app).toLowerCase();
      return searchableContent.includes(searchTerm);
    });
    
    return { items: searchMatches };
  }

  public async getApplication(applicationName: string) {
    const { body } = await this.client.get<V1alpha1Application>(
      `/api/v1/applications/${applicationName}`
    );
    return body;
  }

  public async createApplication(application: V1alpha1Application) {
    const { body } = await this.client.post<V1alpha1Application, V1alpha1Application>(
      `/api/v1/applications`,
      null,
      application
    );
    return body;
  }

  public async updateApplication(applicationName: string, application: V1alpha1Application) {
    const { body } = await this.client.put<V1alpha1Application, V1alpha1Application>(
      `/api/v1/applications/${applicationName}`,
      null,
      application
    );
    return body;
  }

  public async deleteApplication(applicationName: string) {
    const { body } = await this.client.delete<V1alpha1Application>(
      `/api/v1/applications/${applicationName}`
    );
    return body;
  }

  public async syncApplication(applicationName: string) {
    const { body } = await this.client.post<V1alpha1Application, V1alpha1Application>(
      `/api/v1/applications/${applicationName}/sync`
    );
    return body;
  }

  public async getApplicationResourceTree(applicationName: string) {
    const { body } = await this.client.get<V1alpha1ApplicationTree>(
      `/api/v1/applications/${applicationName}/resource-tree`
    );
    return body;
  }

  public async getApplicationManagedResources(
    applicationName: string,
    filters?: {
      namespace?: string;
      name?: string;
      version?: string;
      group?: string;
      kind?: string;
      appNamespace?: string;
      project?: string;
    }
  ) {
    const { body } = await this.client.get<{ items: V1alpha1ResourceDiff[] }>(
      `/api/v1/applications/${applicationName}/managed-resources`,
      filters
    );
    return body;
  }

  public async getApplicationLogs(applicationName: string) {
    const logs: ApplicationLogEntry[] = [];
    await this.client.getStream<ApplicationLogEntry>(
      `/api/v1/applications/${applicationName}/logs`,
      {
        follow: false,
        tailLines: 100
      },
      (chunk) => logs.push(chunk)
    );
    return logs;
  }

  public async getWorkloadLogs(
    applicationName: string,
    applicationNamespace: string,
    resourceRef: V1alpha1ResourceResult,
    container?: string,
    tailLines?: number
  ) {
    const logs: ApplicationLogEntry[] = [];
    const params: any = {
      appNamespace: applicationNamespace,
      namespace: resourceRef.namespace,
      resourceName: resourceRef.name,
      group: resourceRef.group,
      kind: resourceRef.kind,
      version: resourceRef.version,
      follow: false,
      tailLines: tailLines ?? 100
    };
    
    if (container) {
      params.container = container;
    }
    
    await this.client.getStream<ApplicationLogEntry>(
      `/api/v1/applications/${applicationName}/logs`,
      params,
      (chunk) => logs.push(chunk)
    );
    return logs;
  }

  public async getPodLogs(applicationName: string, podName: string) {
    const logs: ApplicationLogEntry[] = [];
    await this.client.getStream<ApplicationLogEntry>(
      `/api/v1/applications/${applicationName}/pods/${podName}/logs`,
      {
        follow: false,
        tailLines: 100
      },
      (chunk) => logs.push(chunk)
    );
    return logs;
  }

  public async getApplicationEvents(applicationName: string) {
    const { body } = await this.client.get<V1EventList>(
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
    const { body } = await this.client.get<V1EventList>(
      `/api/v1/applications/${applicationName}/events`,
      {
        appNamespace: applicationNamespace,
        resourceNamespace,
        resourceUID,
        resourceName
      }
    );
    return body;
  }

  public async getResourceActions(
    applicationName: string,
    applicationNamespace: string,
    resourceRef: V1alpha1ResourceResult
  ) {
    const { body } = await this.client.get<{ actions: V1alpha1ResourceAction[] }>(
      `/api/v1/applications/${applicationName}/resource/actions`,
      {
        appNamespace: applicationNamespace,
        namespace: resourceRef.namespace,
        resourceName: resourceRef.name,
        group: resourceRef.group,
        kind: resourceRef.kind,
        version: resourceRef.version
      }
    );
    return body;
  }

  public async runResourceAction(
    applicationName: string,
    applicationNamespace: string,
    resourceRef: V1alpha1ResourceResult,
    action: string
  ) {
    const { body } = await this.client.post<string, V1alpha1Application>(
      `/api/v1/applications/${applicationName}/resource/actions`,
      {
        appNamespace: applicationNamespace,
        namespace: resourceRef.namespace,
        resourceName: resourceRef.name,
        group: resourceRef.group,
        kind: resourceRef.kind,
        version: resourceRef.version
      },
      action
    );
    return body;
  }
}
