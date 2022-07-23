// import { useState } from "react";
import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    ValueInputIsInvalid: nameInputIsInvalid,
    ValueInputBlurHandler: nameInputBlurHandler,
    ValueInputChangeHandler: NameInputChangeHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");
  // const nameInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNametouch, setEnteredNametouch] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  //
  //
  // const enteredNameIsValid = enteredName.trim() !== "";
  // // const enteredAge
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNametouch;

  let formIsValid = false;

  // useEffect(() => {
  if (enteredNameIsValid) {
    // console.log("name is valid");
    // setFormIsValid(true);
    formIsValid = true;
  }
  // else {
  //   // setFormIsValid(false);
  //   formIsValid = false;
  // }
  // }, [enteredNameIsValid]); //if value in the dependensies changes this value run again

  // const NameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);

  //   // if (enteredName.trim() !== "") {
  //   //   setEnteredNameIsValid(true);
  //   //   // return;
  //   // }
  // };
  // const nameInputBlurHandler = (event) => {
  //   setEnteredNametouch(true);

  //   // if (enteredName.trim() === "") {
  //   //   setEnteredNameIsValid(false);
  //   //   // return;
  //   // }
  // };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNametouch(true);

    if (!enteredNameIsValid) {
      // setEnteredNameIsValid(false);
      return;
    }

    // setEnteredNameIsValid(true); shorting of code
    // default value is browser send http request to a server backend Automatically
    // console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    resetNameInput();
    // setEnteredName("");
    // setEnteredNametouch(false);
  };

  // const nameInputIsInvalid = !enteredNameIsValid && enteredNametouch;

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={NameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
        {/* to disable a button there is another attribute */}
      </div>
    </form>
  );
};

export default SimpleInput;
