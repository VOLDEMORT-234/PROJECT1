import classes from "./Counter.module.css";
import { counterAction } from "../store";
// import { INCREMENT } from "../store";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.showCounter);
  const counter = useSelector((state) => state.counter.counter);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const incrementby5Handler = () => {
    dispatch(counterAction.increase(6));
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementby5Handler}>increment by 5</button>
        <button onClick={decrementHandler}>decerment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
