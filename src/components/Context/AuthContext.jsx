import { createContext, useContext, useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "firebase";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  };

  return (
    <AuthContext.Provider value={{  }}>{children}</AuthContext.Provider>
  );
};
