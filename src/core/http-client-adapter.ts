import { resolve } from "path";
import { User } from "../models/User";



export class HttpClient {

    private _baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    get(endpoint: string, options?: any) {
        return fetch(endpoint, options)
    }
    
    post<T>(endpoint: string, body: any, options?: any): Promise<T> {
        return this._handleRequest<T>(fetch(`${this._baseUrl}/${endpoint}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                ...options,
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }));
    }
    
    put(endpoint: string, body: any, options?: any) {
        return fetch(endpoint, {
            method: "PUT", body: JSON.stringify(body), headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    }
    
    del(endpoint: string, options?: any) {
        return fetch(endpoint, { method: "DELETE" })
    }

    private async _handleRequest<T>(requestResponse: Promise<Response>): Promise<T> {
        const response = await requestResponse;
        const body = await response.json() as T;
        return body;
    }

}

