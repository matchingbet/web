import create from "zustand";
import { persist } from "zustand/middleware";
import { Credentials } from "../models/Credentials";
import { SecurityStore } from "../models/SecurityStore";

import HttpClient from "../core/http-client";

const useSecurityStore = create<SecurityStore>(
  persist(
    (set, _get) => ({
      user: undefined,
      logged: false,
      token: undefined,
      login: async (credentials: Credentials) => {
        const response = await HttpClient.post("/oauth/token", credentials);
        if (response.status === 200) {
          const authToken = response.headers.get("Authorization");
          const user = await response.json();
          set({ token: authToken, logged: true, user });
        }
        return response;
      },
      getUser: async () => {
        const response = await HttpClient.get("/api/user");
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
