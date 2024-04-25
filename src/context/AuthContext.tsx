import React, { createContext, useContext, useEffect, useState } from "react";
type TAuthContext = {
  isAuthenticated?: boolean;
  setToken?: (value: string) => void;
};
const AuthContext = createContext<TAuthContext>({});
export const useAuthContext = () => useContext(AuthContext);
const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, SetAuth] = useState(false);
  useEffect(() => {}, []);

  const getAuthToken = (token: string) => {};
  return (
    <AuthContext.Provider
      value={{ isAuthenticated: isAuth, setToken: getAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
