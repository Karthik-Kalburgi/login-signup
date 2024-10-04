import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  modelFileName: string;
  setModelFileName: (value: string) => void;
  clearModelFileName: () => void;
}

// Create the Zustand store with proper type annotations
export const useModel = create<UserState>()(
  persist(
    (set) => ({
      modelFileName: "OL1700",

      setModelFileName: (value) => {
        set({ modelFileName: value });
      },
      clearModelFileName: () => {
        set({ modelFileName: "" }); // Clear the user state
      },
    }),
    {
      name: "modulo-model", // The name of the local storage key
    }
  )
);
