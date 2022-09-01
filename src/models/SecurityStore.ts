
export interface SecurityStore {
  userId?: number;
  logged: boolean;
  token?: string;
  refreshToken?: string;
}
