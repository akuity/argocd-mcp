export interface HttpResponse<T> {
  status: number;
  headers: Headers;
  body: T;
}

export class HttpClient {
  public readonly baseUrl: string;
  public readonly apiToken: string;
  public readonly headers: Record<string, string>;

  constructor(baseUrl: string, apiToken: string) {
    this.baseUrl = baseUrl;
    this.apiToken = apiToken;
    this.headers = {
      Authorization: `Bearer ${this.apiToken}`,
      'Content-Type': 'application/json'
    };
  }

  private async request<R>(url: string, init?: RequestInit): Promise<HttpResponse<R>> {
    const response = await fetch(this.absUrl(url), {
      ...init,
      headers: { ...init?.headers, ...this.headers }
    });
    const body = await response.json();
    return {
      status: response.status,
      headers: response.headers,
      body: body as R
    };
  }

  private async requestStream<R>(url: string, cb: (chunk: R) => void, init?: RequestInit) {
    const response = await fetch(this.absUrl(url), {
      ...init,
      headers: { ...init?.headers, ...this.headers }
    });
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('response body is not readable');
    }
    const decoder = new TextDecoder('utf-8');
    let buffer = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.trim()) {
          const json = JSON.parse(line);
          cb(json['result']);
        }
      }
    }
  }

  absUrl(url: string): string {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return new URL(url, this.baseUrl).toString();
  }

  async get<R>(url: string): Promise<HttpResponse<R>> {
    const response = await this.request<R>(url);
    return response;
  }

  async getStream<R>(url: string, cb: (chunk: R) => void): Promise<void> {
    await this.requestStream<R>(url, cb);
  }

  async post<T, R>(url: string, body?: T): Promise<HttpResponse<R>> {
    const response = await this.request<R>(url, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined
    });
    return response;
  }

  async put<T, R>(url: string, body?: T): Promise<HttpResponse<R>> {
    const response = await this.request<R>(url, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined
    });
    return response;
  }

  async delete<R>(url: string): Promise<HttpResponse<R>> {
    const response = await this.request<R>(url, {
      method: 'DELETE'
    });
    return response;
  }
}
