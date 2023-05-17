import React from "react";

import Chart from "../Chart/Chart";

export default function ExpensesChart({ items }) {
  const chartDataPoints = [
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
    { label: "Dec", value: 0 },
  ];
  // const convertYear = items.map((d) => {
  //   const newDate = new Date(d.date);
  //   const year = newDate.getFullYear();
  //   // console.log(year);
  //   return year;
  // });

  //LOOK INTO THIS FUNCTION... I THINK IT IS NOT ASSIGNING TO CORRECT MONTHS
  //SO CLOSE! Keep following data.. think good here, check <Chart component
  //Nope, we're good, ALREADY FIXED IT! Setting date to expense.date was key factor in assigning data

  for (const expense of items) {
    const date = expense.date;
    const newDate = new Date(date); // SOMETHING NOT GOING THROUGH HERE.. I BELIEVE
    const expenseMonth = newDate.getMonth(); // starting at 0 => January => 0
    // console.log(expenseMonth);
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}
