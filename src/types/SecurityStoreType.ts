
export interface ISecurityStore {
  userId?: number;
  logged: boolean;
  token?: string;
  refreshToken?: string;
}
