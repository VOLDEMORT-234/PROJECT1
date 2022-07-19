import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
// import MainHeader from "./components/MainHeader/MainHeader";
// import { useContext } from "react";
import AuthContext from "./components/store/auth-context";
// import AuthContext from "./components/store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways

  //   localStorage.setItem("isLoggedIn", "1"); //use to store data
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  // </AuthContext.Provider>
  return (
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler,
    //   }}
    // >
    // <MainHeader />
    <React.Fragment>
      {/* isAuthenticated={isLoggedIn} onLogout={logoutHandler} */}
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

//  relosd a page you will go back to the same page you were before
