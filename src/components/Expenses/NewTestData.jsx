import { useDispatch } from "react-redux";
import "../ExpensesCSS/NewTestData.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
//If you have data that may change and may want reflected on the UI, then you need State

export default function NewTestData({ items }) {
  const dispatch = useDispatch();
  return (
    <li>
      <Card className="expense-item">
        {/* {console.log(items.date)} */}
        {/* <ExpenseDate date={items.date} /> */}
        <div className="expense-item__description">
          {/* <h2>{items.date}</h2> */}
          <h2>{items.title}</h2>
          <div className="expense-item__price">${items.amount}</div>
        </div>
        <button
          className="close"
          onClick={() => dispatch(deleteExpense(items._id))}
        >
          X
        </button>
      </Card>
    </li>
  );
}
