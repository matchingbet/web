import type { User } from "./User";
import type { Credentials } from "./Credentials";

export interface SecurityStore {
  user?: User;
  logged: boolean;
  token?: string;
  login: (credentials: Credentials) => any;
}
