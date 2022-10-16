import {Credentials} from "../models/Credentials";
import {User} from "../models/User";
import {HttpClient} from "../core/http-client-adapter";
import useSecurityStore from "../stores/SecurityStore";
import { AuthDataSource } from "../data/auth.data-souce";


interface IAuthService {
    login: (credentials: Credentials) => Promise<Response>;
    signOut: () => void;
    getUser: () => Promise<User>;
}

export class AuthService implements IAuthService {

    private dataSource = new AuthDataSource();

    public async getUser(): Promise<User> {
        const token = useSecurityStore.getState().token;
        return this.dataSource.getUserWithToken(token || "");
    }

    public async login(credentials: Credentials): Promise<Response> {
        const basicToken = process.env.NEXT_PUBLIC_BASIC_API_TOKEN;
        const options = {"Authorization": `Basic ${basicToken}`, "Content-Type": "application/x-www-form-urlencoded"}
        const serverCredentials = { ...credentials, "grant_type": "password"};

        const response = await this.dataSource.login(serverCredentials, options);
        if (response.ok) {
            const body = await response.json();
            const authToken = body["access_token"];
            const refreshToken = body["refresh_token"];
            useSecurityStore.setState(() => ({token: authToken || "", userId: body["user_id"], logged: true, refreshToken: refreshToken}));
        } else {
            useSecurityStore.setState(() => ({token: undefined, userId: undefined, logged: false, refreshToken: undefined}));
        }
        return response;
    }

    public signOut(): void {
        useSecurityStore.setState({token: undefined, userId: undefined, logged: false});
    }

}