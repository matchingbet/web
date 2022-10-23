import useSecurityStore from "../stores/SecurityStore";

export class HttpClient {

    private _baseUrl = process.env.NEXT_PUBLIC_API_URL;

    get(endpoint: string, id?: number, options?: any): Promise<Response> {
        let url = `${this._baseUrl}/${endpoint}`;
        if (id) {
            console.log(url);
            url = `${url}/${id}`;
        }
        
        return fetch(url, {
            method: "GET",
            headers: this._buildHeaders(options)
        });
    }

    post(endpoint: string, body: any, options?: any): Promise<Response> {

        const headers = this._buildHeaders(options)

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
            headers: this._buildHeaders(options)
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
            headers: this._buildHeaders(options)
        });
    }

    private _buildHeaders(options?: any) {
        const authStorageString = window.localStorage.getItem("auth_store");
        const token = !!authStorageString ? JSON.parse(authStorageString).state.token : null;

        return {
            ...options,
            ...token ? {"Authorization": `bearer ${token}`} : {},
            "Accept": "application/json",
            "Content-Type": options && options["Content-Type"] ? options["Content-Type"] : "application/json"
        };
    }

}

