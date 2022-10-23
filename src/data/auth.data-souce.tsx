import { Endpoints } from "../core/constants/endpoints";
import { HttpClient } from "../core/http-client-adapter";
import { Credentials } from "../models/Credentials";
import { User } from "../models/User";

export class AuthDataSource {

    private http: HttpClient = new HttpClient();

    public async getUserWithToken(jwtToken: string): Promise<User> {
        const headers = new Headers();
        const token = `bearer ${jwtToken || ""}`;
        console.log(token);
        headers.set("Authorization", token);
        const response = await this.http.get(Endpoints.USERS, undefined, { headers: headers });
        if (response.ok) {
            const userResponse = await response.json();
            return userResponse as User;
        } else {
            throw Error("");
        }
    }

    public async getUserById(id: number): Promise<User> {
        console.log("passou aqui 4");
        const response = await this.http.get(Endpoints.USERS, id);
        console.log(response);
        if (response.ok) {
            const userResponse = await response.json();
            return userResponse as User;
        } else {
            throw Error("");
        }
    }

    public async login(credentials: Credentials): Promise<Response> {
        const basicToken = process.env.NEXT_PUBLIC_BASIC_API_TOKEN;
        const options = {"Authorization": `Basic ${basicToken}`, "Content-Type": "application/x-www-form-urlencoded"}
        const serverCredentials = { ...credentials, "grant_type": "password"};
        const response = await this.http.post("/oauth/token", serverCredentials, options);
        if (response.ok) {
            return response;
        } else {
            throw Error(response.statusText);
        }
    }

}