import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react";
// import Products from "./Products";
const Welcome = () => {
  return (
    <Fragment>
      <h1>The welcome page</h1>
      <Route path="/welcome/new-user">
        <p>welcome-NEW-user :)</p>
      </Route>
    </Fragment>
  );
};

export default Welcome;

// redirect very important
