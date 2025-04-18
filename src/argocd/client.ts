import { ApplicationList } from '../shared/models/models.js';
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
    const { body } = await this.client.get<ApplicationList>('/api/v1/applications');
    return body;
  }
}
