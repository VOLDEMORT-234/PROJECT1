import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredtitle, setenteredtitle] = useState("");
  const [enteredamount, setenteredamount] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  //   // document.getElementById('').addEventListener('click',(event)=>{

  // })

  //   const [userInput, setUserInput] = useState({
  //     enteredDate: "",
  //     enteredtitle: "",
  //     enteredamount: "",
  //   });

  const titlechangehandler = (event) => {
    setenteredtitle(event.target.value);
    // setUserInput((prevState)=>{
    //      return {...prevState,enteredtitle:event.target.value};
    // });
  };

  const amountchangehandler = (event) => {
    setenteredamount(event.target.value);
    // setUserInput(()=>{
    //   ...userInput,
    //   enteredamount: event.target.value,
    // });
  };
  const datechangehandle = (event) => {
    setenteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submithandler = (event) => {
    event.preventDefault(); //builtin js feature

    const expenseData = {
      title: enteredtitle,
      amount: +enteredamount,
      date: new Date(enteredDate),
    };

    props.SaveExpenseData(expenseData);
    setenteredDate("");
    setenteredamount("");
    setenteredtitle("");
  };

  // ************************************************************************************************************************************
  //   two way binding

  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titlechangehandler}
            value={enteredtitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountchangehandler}
            value={enteredamount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-06-03"
            max="2025-08-05"
            onChange={datechangehandle}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions"></div>
      <button type="submit">Add expense</button>
      {/* button on  click is not a good idea */}
    </form>
  );
};

export default ExpenseForm;
