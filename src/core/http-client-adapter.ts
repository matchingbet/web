export class HttpClient {

    private _baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    get<T>(endpoint: string, id?: number, options?: any): Promise<T> {
        let url = `${this._baseUrl}/${endpoint}`;
        if (id) {
            url = `${url}/${id}`;
        }
        return HttpClient._handleRequest<T>(fetch(url, {
            method: "GET",
            headers: {
                ...options,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }));
    }

    post<T>(endpoint: string, body: any, options?: any): Promise<T> {

        const headers = {
            ...options,
            "Accept": "application/json",
            "Content-Type": options && options["Content-Type"] ? options["Content-Type"] : "application/json"
        };

        const requestBody = options && options["Content-Type"] != "application/json" ? new URLSearchParams(body) : JSON.stringify(body);

        return HttpClient._handleRequest<T>(fetch(`${this._baseUrl}${endpoint}`, {
            method: "POST",
            body: requestBody,
            headers: headers
        }));
    }

    getById<T>(endpoint: string, id?: number, options?: any): Promise<T> {
        let url = `${this._baseUrl}/${endpoint}`;
        if (id) {
            url = `${url}/${id}`;
        }
        return HttpClient._handleRequest<T>(fetch(url, {
            method: "GET",
            headers: {
                ...options,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }));
    }

    update<T>(endpoint: string, body: any, id?: number, options?: any): Promise<T> {
        let url = `${this._baseUrl}/${endpoint}`;
        if (id) {
            url = `${url}/${id}`;
        }
        return HttpClient._handleRequest<T>(fetch(url, {
            method: "PUT",
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

