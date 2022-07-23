import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  render() {
    // render is equivalent to return statement
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {};

export default User;
