
export class HttpClient {

    private _baseUrl = process.env.NEXT_PUBLIC_API_URL;

    async get(endpoint: string, id?: number, options?: any): Promise<Response> {
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

    async post(endpoint: string, body: any, options?: any): Promise<Response> {

        const headers = this._buildHeaders(options)

        const requestBody = options && options["Content-Type"] != "application/json" ? new URLSearchParams(body) : JSON.stringify(body);

        return fetch(`${this._baseUrl}${endpoint}`, {
            method: "POST",
            body: requestBody,
            headers: headers
        });
    }

    async getById(endpoint: string, id?: number, options?: any): Promise<Response> {
        let url = `${this._baseUrl}/${endpoint}`;
        if (id) {
            url = `${url}/${id}`;
        }
        return fetch(url, {
            method: "GET",
            headers: this._buildHeaders(options)
        });
    }

    async update(endpoint: string, body: any, id?: number, options?: any): Promise<Response> {
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

        this._refreshToken();

        const authStorageString = window.localStorage.getItem("auth_store");
        const token = !!authStorageString ? JSON.parse(authStorageString).state.token : null;

        return {
            ...options,
            ...token ? { "Authorization": `bearer ${token}` } : {},
            "Accept": "application/json",
            "Content-Type": options && options["Content-Type"] ? options["Content-Type"] : "application/json"
        };
    }

    async _refreshToken() {
        const authStorageString = window.localStorage.getItem("auth_store");
        const refreshToken = !!authStorageString ? JSON.parse(authStorageString).state.refresh_token : null;

        const basicToken = process.env.NEXT_PUBLIC_BASIC_API_TOKEN;
        const options = { "Authorization": `Basic ${basicToken}`, "Content-Type": "application/x-www-form-urlencoded" }
        const encodedToken = { ...refreshToken, "grant_type": "refresh_token" };
        const response = await this.post("/oauth/token", encodedToken, options);

        if (response.ok) {
            const body = await response.json();
            const authToken = body["access_token"];
            console.log(body["users_id"]);
            const authStorageString = window.localStorage.getItem("auth_store");
            const authStorageStringState = !!authStorageString ? JSON.parse(authStorageString).state : null;
            authStorageStringState['token'] = authToken;
            window.localStorage.setItem("auth_store", JSON.stringify(authStorageStringState));
        }

    }


}

