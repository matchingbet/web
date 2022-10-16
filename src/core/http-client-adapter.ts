export class HttpClient {

    private _baseUrl = process.env.NEXT_PUBLIC_API_URL;

    get(endpoint: string, id?: number, options?: any): Promise<Response> {
        let url = `${this._baseUrl}/${endpoint}`;
        console.log(url);
        if (id) {
            url = `${url}/${id}`;
        }
        return fetch(url, {
            method: "GET",
            headers: {
                ...options,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
    }

    post(endpoint: string, body: any, options?: any): Promise<Response> {

        const headers = {
            ...options,
            "Accept": "application/json",
            "Content-Type": options && options["Content-Type"] ? options["Content-Type"] : "application/json"
        };

        const requestBody = options && options["Content-Type"] != "application/json" ? new URLSearchParams(body) : JSON.stringify(body);

        return fetch(`${this._baseUrl}${endpoint}`, {
            method: "POST",
            body: requestBody,
            headers: headers
        });
    }

    getById(endpoint: string, id?: number, options?: any): Promise<Response> {
        let url = `${this._baseUrl}/${endpoint}`;
        if (id) {
            url = `${url}/${id}`;
        }
        return fetch(url, {
            method: "GET",
            headers: {
                ...options,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
    }

    update(endpoint: string, body: any, id?: number, options?: any): Promise<Response> {
        let url = `${this._baseUrl}/${endpoint}`;
        if (id) {
            url = `${url}/${id}`;
        }
        return fetch(url, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                ...options,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
    }

}

