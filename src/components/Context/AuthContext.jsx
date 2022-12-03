import { createContext, useContext } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../index";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  };

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
};
