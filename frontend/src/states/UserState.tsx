import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  createdAt: string;
}

interface UserState {
  user: User;
  setUser: (value: User) => void;
  clearUser: () => void;
}

const emptyUser = {
  _id: "",
  name: "",
  email: "",
  mobile: "",
  createdAt: "",
};

// Create the Zustand store with proper type annotations
export const useUser = create<UserState>()(
  persist(
    (set) => ({
      user: emptyUser,
      setUser: (value) => {
        set({ user: value }); // Update the user state
      },
      clearUser: () => {
        set({ user: emptyUser }); // Clear the user state
      },
    }),
    {
      name: "modulo-user", // The name of the local storage key
    }
  )
);
