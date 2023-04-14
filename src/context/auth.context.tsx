import { createContext, ReactNode, useEffect, useState, useContext } from "react";
import { auth } from "../firebase/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";

type State = {
  logout: any;
  user: null | User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const initialState = {
  user: null,
  setUser: () => null,
  logout: () => Promise.resolve(),
};

const AuthContext = createContext<State>(initialState);

type ProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<null | User>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, [auth]);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, setUser, logout }}>{children}</AuthContext.Provider>;
};

export const useUser = () => useContext(AuthContext).user;
export const useLogout = () => useContext(AuthContext).logout;
