import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

// import "./Expense.css";
// import Card from "../UI/Card";
// import React, { useState } from "react";
// import ExpenseDate from "../ExpenseDate";

// // use parameter
// function ExpenseItem(props /*you can name it any thing*/) {
//   //   const expenseDate = new Date(2022, 6, 21);
//   //   const expenseTitle = "car insuranse";
//   //   const ex penseamount = 245;
//   useState(); //must be called inside we can call special variable inside this

//   const [title, setTitle] = useState(props.title); //value,function

//   const eventlistner = () => {
//     setTitle("updated");
//     console.log(title);
//   };

//   return (
//     <Card className="ar">
//       <ExpenseDate date={props.date} />
//       {/* given as a parameter very important */}
//       <div>
//         <h2 className="pr">{title}</h2>
//       </div>
//       <div>
//         <h2 className="cr">${props.amount}</h2>
//       </div>
//       <button
//         onClick={eventlistner }
//         // onClick={() => {
//         //   console.log("clicked"); //this make our code more unorganised so we try to make a new variable and then make a function
//         // }}
//       >
//         {" "}
//         change title
//       </button>
//       {/* all event listner want function as a return value  */}
//     </Card>
//   );
// }

// // props component in react

// export default ExpenseItem;
