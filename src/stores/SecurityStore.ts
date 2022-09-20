import create from "zustand";
import { persist } from "zustand/middleware";
import { Credentials } from "../models/Credentials";
import { SecurityStore } from "../models/SecurityStore";

import { HttpClient } from "../core/http-client-adapter";

const httpClient = new HttpClient();

export const useSecurityStore = create<SecurityStore>(
  persist(
    (set, _get) => ({
      userId: undefined,
      logged: false,
      token: undefined,
      refreshToken: undefined
    }),
    {
      name: "auth_store",
    }
  )
);

export default useSecurityStore;
