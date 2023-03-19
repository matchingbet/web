import { AuthDataSource } from "../data/auth.data-souce";
import { Credentials } from "../models/Credentials";
import { User } from "../models/User";
import useSecurityStore from "../stores/SecurityStore";
import jwt_decode from 'jwt-decode';


interface IAuthService {
  login: (credentials: Credentials) => Promise<Response>;
  signOut: () => void;
  getUser: () => Promise<User | null>;
}

const dataSource = new AuthDataSource();

export class AuthService implements IAuthService {

  public async getUser(): Promise<User | null> {
    if (useSecurityStore.getState().logged) {
      const token = useSecurityStore.getState().token;
      const decoded = jwt_decode(token || "") as any;
      console.log(decoded["users_id"]);
      return dataSource.getUserById(1);
    }
    return Promise.resolve(null);
  }

  public async login(credentials: Credentials): Promise<Response> {
    const response = await dataSource.login(credentials);
    console.log(response.ok);
    if (response.ok) {
      const body = await response.json();
      const authToken = body["access_token"];
      const refreshToken = body["refresh_token"];
      const expiresIn = Date.now() + (body["expires_in"] * 1000);
      console.log(body["users_id"]);
      useSecurityStore.setState(() => ({ token: authToken || "", userId: body["users_id"], logged: true, refreshToken: refreshToken, expiresIn: expiresIn }));
    } else {
      useSecurityStore.setState(() => ({ token: undefined, userId: undefined, logged: false, refreshToken: undefined, expiresIn: undefined }));
    }
    return response;
  }

  public signOut(): void {
    useSecurityStore.setState({ token: undefined, userId: undefined, logged: false, refreshToken: undefined });
  }

  public isLogged(): boolean {
    return useSecurityStore.getState().logged;
  }

}
