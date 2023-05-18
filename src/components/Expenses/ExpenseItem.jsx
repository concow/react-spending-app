import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../features/expenses/ExpenseSlice";
import "../ExpensesCSS/ExpenseItem.css";

//If you have data that may change and may want reflected on the UI, then you need State

function ExpenseItem({ expense }) {
  const dispatch = useDispatch();
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">${expense.amount}</div>
        </div>
        <button
          className="item-btn"
          onClick={() => dispatch(deleteExpense(expense._id))}
        >
          X
        </button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
