import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthcontextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUerLoggedInformation = localStorage.getItem("isLoggedIn");
    if (storedUerLoggedInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logouthandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthcontextProvider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logouthandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthcontextProvider>
  );
};

export default AuthContext;
