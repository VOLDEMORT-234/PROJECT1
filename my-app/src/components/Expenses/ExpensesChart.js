import Chart from "../Chart/Chart";
// import ChartBar from "../Chart/ChartBar"

const ExpenseChart = (props) => {
  const charDatapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dev", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0
    charDatapoints[expenseMonth].value += expense.amount;
  }
  return <Chart datapoints={charDatapoints} />;
};

export default ExpenseChart;
