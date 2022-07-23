import { Component, Fragment } from "react";
import Users from "./Users";
import classes from "./UserFinder.module.css";
import UserContext from "./store/user-context";
import Error from "./Error";
// import User from "./User";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];
// Error boundry

// class based component and functional component

class UserFinder extends Component {
  static contextType = UserContext;

  constructor() {
    super();
    this.state = {
      filteredUser: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.setState({
      filteredUser: this.context.users,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUser: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Fragment>
        {/* <UserContext.Consumer></UserContext.Consumer> */}
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Error>
          <Users users={this.state.filteredUser} />
        </Error>
      </Fragment>
    );
  }
}

export default UserFinder;
