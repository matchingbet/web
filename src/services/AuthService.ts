import {Credentials} from "../models/Credentials";
import {User} from "../models/User";
import {HttpClient} from "../core/http-client-adapter";
import useSecurityStore from "../stores/SecurityStore";


interface AuthServiceType {
    login: (credentials: Credentials) => Promise<Response>;
    signOut: () => void;
    getUser: () => Promise<User>;
}

export class AuthService implements AuthServiceType {

    private http = new HttpClient();

    public async getUser(): Promise<User> {
        const headers: Headers = new Headers();
        const token = useSecurityStore.getState().token;
        headers.set("Authorization", token || "");

        const response = await this.http.get<User>("/api/user", undefined, { header: headers });
        return response;
    }

    public async login(credentials: Credentials): Promise<Response> {
        const response = await this.http.post<Response>("/api/login", credentials);
        if (response.status === 200) {
            const authToken = response.headers.get("Authorization");
            const user = await response.json();
            useSecurityStore.setState({token: authToken || "", user: user, logged: true});
        }
        return response;
    }

    public signOut(): void {
        useSecurityStore.setState({token: undefined, user: undefined, logged: false});
    }

}