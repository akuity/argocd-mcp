export class HttpClient {
  public readonly baseUrl: string;
  public readonly apiToken: string;
  public readonly headers: Record<string, string>;

  constructor(baseUrl: string, apiToken: string) {
    this.baseUrl = baseUrl;
    this.apiToken = apiToken;
    this.headers = {
      Authorization: `Bearer ${this.apiToken}`,
      "Content-Type": "application/json",
    };
  }

  private async request(url: string, init?: RequestInit): Promise<Response> {
    const response = await fetch(this.absUrl(url), {
      ...init,
      headers: { ...init?.headers, ...this.headers },
    });
    return response;
  }

  absUrl(url: string): string {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    return new URL(url, this.baseUrl).toString();
  }

  async get<R>(url: string): Promise<R> {
    const response = await this.request(url);
    return response.json();
  }

  async post<T, R>(url: string, body?: T): Promise<R> {
    const response = await this.request(url, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    });
    return response.json();
  }

  async put<T, R>(url: string, body?: T): Promise<R> {
    const response = await this.request(url, {
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    });
    return response.json();
  }

  async delete<R>(url: string): Promise<R> {
    const response = await this.request(url, {
      method: "DELETE",
    });
    return response.json();
  }
}
