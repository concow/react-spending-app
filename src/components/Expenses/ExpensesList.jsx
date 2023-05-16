import "../ExpensesCSS/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
export default function ExpensesList({ items }) {
  // if (props.items.length === 0) {
  //   return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  // }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          key={expense._id}
          expense={expense}
          // title={expense.title}
          // amount={expense.amount}
          // date={expense.date}
        />
      ))}
    </ul>
  );
}
