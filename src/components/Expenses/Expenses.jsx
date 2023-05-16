import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../ExpensesCSS/Expenses.css";
import NewTestData from "./NewTestData";

export default function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2023");
  // const { expenses } = useSelector((state) => state.expenses);
  // console.log(expenses);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // const filteredExpenses = props.items.filter((expense) => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  // const filteredExpenses = items.filter((expense) => {
  //   console.log(expense.date.getFullYear().toString());
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesList items={items} />
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        {/* <ExpensesList items={filteredExpenses} /> */}
      </Card>
    </div>
  );
}
