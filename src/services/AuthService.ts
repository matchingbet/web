import { AuthDataSource } from "../data/auth.data-souce";
import { Credentials } from "../models/Credentials";
import { User } from "../models/User";
import useSecurityStore from "../stores/SecurityStore";


interface IAuthService {
  login: (credentials: Credentials) => Promise<Response>;
  signOut: () => void;
  getUser: () => Promise<User | null>;
}

const dataSource = new AuthDataSource();

export class AuthService implements IAuthService {

  public async getUser(): Promise<User | null> {
    const id = useSecurityStore.getState().userId;
    if (!id) {
      this.signOut();
      return Promise.resolve(null);
    }
    return dataSource.getUserById(id);
  }

  public async login(credentials: Credentials): Promise<Response> {
    const response = await dataSource.login(credentials);
    console.log(response.ok);
    if (response.ok) {
      const body = await response.json();
      const authToken = body["access_token"];
      const refreshToken = body["refresh_token"];
      console.log(body["users_id"]);
      useSecurityStore.setState(() => ({ token: authToken || "", userId: body["users_id"], logged: true, refreshToken: refreshToken }));
    } else {
      useSecurityStore.setState(() => ({ token: undefined, userId: undefined, logged: false, refreshToken: undefined }));
    }
    return response;
  }

  public signOut(): void {
    useSecurityStore.setState({ token: undefined, userId: undefined, logged: false });
  }

  public isLogged(): boolean {
    return useSecurityStore.getState().logged;
  }

}
