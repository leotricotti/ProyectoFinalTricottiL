import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../index";

export const AuthContext = createContext();

export const useAuth = () => {
  const [user, setUser] = useState(null);

  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const login = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ login, user, logout }}>{children}</AuthContext.Provider>
  );
};
