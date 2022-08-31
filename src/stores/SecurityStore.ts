import create from "zustand";
import { persist } from "zustand/middleware";
import { Credentials } from "../models/Credentials";
import { SecurityStore } from "../models/SecurityStore";

import { HttpClient } from "../core/http-client-adapter";

const httpClient = new HttpClient();

export const useSecurityStore = create<SecurityStore>(
  persist(
    (set, _get) => ({
      user: undefined,
      logged: false,
      token: undefined,
      login: async (credentials: Credentials) => {
        const options = {"Authorization": "Basic YmFjay13ZWI6d2ViMTIz"}
        const serverCredentials = { ...credentials, "grant_type": "password" };
        const response = await httpClient.post("/oauth/token", serverCredentials, options) as any;

        if (response.status === 200) {
          const authToken = response.headers.get("Authorization");
          const user = await response.json();
          set({ token: authToken, logged: true, user });
        }
        return response;
      },
      getUser: async () => {
        const response = await httpClient.get("/api/user") as any;
        const user = await response.json();
        set({ user });
        return user;
      },
      signOut: () =>
        set(() => ({ token: undefined, logged: false, user: undefined })),
    }),
    {
      name: "auth_store",
    }
  )
);

export default useSecurityStore;
