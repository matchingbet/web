import { Credentials } from "../models/Credentials";
import { User } from "../models/User";
import { HttpClient } from "../core/http-client-adapter";
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

    const response = await this.http.get<User>("/api/user", undefined, {
      header: headers,
    });
    return response;
  }

  public async login(credentials: Credentials): Promise<Response> {
    const options = {
      Authorization: "Basic YmFjay13ZWI6d2ViMTIz",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const serverCredentials = { ...credentials, grant_type: "password" };

    const response = await this.http.login(
      "/oauth/token",
      serverCredentials,
      options
    );
    if (response.status === 200) {
      const body = await response.json();
      const authToken = body["access_token"];
      const refreshToken = body["refresh_token"];
      useSecurityStore.setState(() => ({
        userId: body["user_id"],
        logged: true,
        refreshToken: refreshToken,
      }));
    } else {
      const body = await response.json();

      useSecurityStore.setState(() => ({
        token: undefined,
        userId: undefined,
        logged: false,
        refreshToken: undefined,
      }));
    }
    return response;
  }

  public signOut(): void {
    useSecurityStore.setState({
      token: undefined,
      userId: undefined,
      logged: false,
    });
  }
}
