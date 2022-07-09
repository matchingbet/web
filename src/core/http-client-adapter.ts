export class HttpClient {

    private _baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    get<T>(endpoint: string): Promise<T> {
        return HttpClient._handleRequest<T>(fetch(`${this._baseUrl}/${endpoint}`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }));
    }

    post<T>(endpoint: string, body: any, options?: any): Promise<T> {
        return HttpClient._handleRequest<T>(fetch(`${this._baseUrl}/${endpoint}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                ...options,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }));
    }

    private static async _handleRequest<T>(requestResponse: Promise<Response>): Promise<T> {
        const response = await requestResponse;
        return await response.json() as T;
    }

}

