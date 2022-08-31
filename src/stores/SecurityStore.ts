import create from "zustand";
import { persist } from "zustand/middleware";
import { SecurityStore } from "../models/SecurityStore";


const useSecurityStore = create<SecurityStore>(
  persist(
    (set, _get) => ({
      user: undefined,
      logged: false,
      token: undefined,
    }),
    {
      name: "auth_store",
    }
  )
);

export default useSecurityStore;
