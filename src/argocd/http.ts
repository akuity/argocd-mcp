export interface HttpResponse<T> {
  status: number;
  headers: Headers;
  body: T;
}

type SearchParams = Record<string, string | number>;

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

  private async request<R>(
    url: string,
    params?: SearchParams,
    init?: RequestInit
  ): Promise<HttpResponse<R>> {
    const urlObject = this.absUrl(url);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null) return;
        urlObject.searchParams.set(key, value.toString());
      });
    }
    const response = await fetch(urlObject, {
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

  private async requestStream<R>(
    url: string,
    cb: (chunk: R) => void,
    params?: SearchParams,
    init?: RequestInit
  ) {
    const urlObject = this.absUrl(url);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value === undefined || value === null) return;
        urlObject.searchParams.set(key, value.toString());
      });
    }
    const response = await fetch(urlObject, {
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

  absUrl(url: string): URL {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return new URL(url);
    }
    return new URL(url, this.baseUrl);
  }

  async get<R>(url: string, params?: SearchParams): Promise<HttpResponse<R>> {
    const response = await this.request<R>(url, params);
    return response;
  }

  async getStream<R>(url: string, cb: (chunk: R) => void, params?: SearchParams): Promise<void> {
    await this.requestStream<R>(url, cb, params);
  }

  async post<T, R>(url: string, body?: T): Promise<HttpResponse<R>> {
    const response = await this.request<R>(url, undefined, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined
    });
    return response;
  }

  async put<T, R>(url: string, body?: T): Promise<HttpResponse<R>> {
    const response = await this.request<R>(url, undefined, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined
    });
    return response;
  }

  async delete<R>(url: string): Promise<HttpResponse<R>> {
    const response = await this.request<R>(url, undefined, {
      method: 'DELETE'
    });
    return response;
  }
}
