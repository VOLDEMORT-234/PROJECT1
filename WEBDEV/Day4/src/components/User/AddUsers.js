import React, { useState, useRef } from "react";
import classes from "./AddUsers.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
// import Wrapper from "./helper/Wrapper";
import Errormodel from "./UI/Errormodel";
// import UserList from "./UsersList";
const AddUser = (props) => {
  const nameInputref = useRef();
  const ageInputref = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    const enteredname = nameInputref.current.value;
    const enteredage = ageInputref.current.value;
    event.preventDefault();
    if (enteredname.trim().length === 0 || enteredage.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please Enter the valid name",
      });
      return;
    }
    // JSX
    if (+enteredage < 1) {
      setError({
        title: "invalid age",
        message: "Please Enter the valid age greater than 0",
      });
      // + ensures it is a number ;
      return;
    }
    props.onAddUser(enteredname, enteredage);
    nameInputref.current.value = "";
    ageInputref.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const AgeChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  //wraping an array is combursome
  return (
    <>
      {/* or use React.fragment  vert important */}
      {error && (
        <Errormodel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          // key="hey-bro"
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputref}
          />
          <label htmlFor="username">Age</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={AgeChangeHandler}
            ref={ageInputref}
          />
          {/* div button is a bad button */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
    // creating wraping components
    // div soup
  );
};

export default AddUser;
// effect reducer && context
// state shareign update shareing

// what is an effect

// render UI and react to the user Input
// useState hook ,props etc 
