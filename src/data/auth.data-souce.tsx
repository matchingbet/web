import { Endpoints } from "../core/constants/endpoints";
import { HttpClient } from "../core/http-client-adapter";
import { User } from "../models/User";

export class AuthDataSource {

    private http: HttpClient = new HttpClient();

    public async getUserWithToken(jwtToken: string): Promise<User> {
        const headers = new Headers();
        headers.set("Authorization", jwtToken || "");
        const response = await this.http.get(Endpoints.USERS, undefined, { headers: headers });
        if (response.ok) {
            const userResponse = await response.json();
            return userResponse as User;
        } else {
            throw Error(response.statusText);
        }
    }

    public async login(serverCredentials: any, options: any): Promise<Response> {
        return await this.http.post("/oauth/token", serverCredentials, options)
    }

}