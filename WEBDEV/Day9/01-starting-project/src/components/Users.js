import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];
// name should be 'state' that name is not upto us

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
      moreState: "Test",
      nested: {},
      data: [],
    };
  }
  // useEffect(...,[])
  // class-based Component can't use react hooks

  componentDidUpdate() {

    // try{
    //   someCodeWhichFail()
    // }
    // catch(err){

    // }
    if (this.props.users.length === 0) {
      throw new Error("No users Provided!");
    }
  }

  toggleUsersHandler() {
    // this.state
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };
// };

export default Users;
