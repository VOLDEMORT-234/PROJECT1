import { useReducer } from "react";

const initialInputState = {
  value: "",
  enteredValuetouch: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, enteredValuetouch: state.enteredValuetouch };
  }
  if (action.type === "BLUR") {
    return {
      //   value: action.value,
      enteredValuetouch: true,
    };
  }
  if (action.type === "RESET") {
    return {
      //   value: action.value,
      enteredValuetouch: false,
      value: "",
    };
  }

  return initialInputState;
};

const useInput = (Validatevalue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [enteredValuetouch, setEnteredValuetouch] = useState(false);

  const enteredValueIsValid = Validatevalue(inputState.value);
  // const enteredAge
  const ValueInputIsInvalid =
    !enteredValueIsValid && inputState.enteredValuetouch;

  const ValueInputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    // setEnteredValue(event.target.value);
  };

  const ValueInputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });

    // setEnteredValuetouch(true);
  };

  const reset = (event) => {
    // setEnteredValue("");
    dispatch({ type: "RESET", value: event.target.value });

    // setEnteredValuetouch(false);
  };

  return {
    value: inputState.value,
    isValid: ValueInputIsInvalid,
    ValueInputIsInvalid,
    ValueInputBlurHandler,
    ValueInputChangeHandler,
    reset,
  };
};

export default useInput;
