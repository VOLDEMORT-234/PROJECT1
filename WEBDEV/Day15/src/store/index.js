// const redux = require("redux");
// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
// import {counterActions}
const initialcounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialcounterState,
  reducers: {
    login() {},
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthstate = {
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthstate,
  reducer: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// counterSlice.actions.toggleCounter;

// export const INCREMENT = "increment";
// const counterReducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increaseby5") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };
// only one store can be called doesnot matter in create slice
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
  // reducer: { counter: counterSlice.reducer },
});

export const counterAction = counterSlice.actions;
export const authAction = AuthSlice.actions;

export default store;
