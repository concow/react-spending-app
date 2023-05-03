import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../ExpensesCSS/ExpenseItem.css";

//If you have data that may change and may want reflected on the UI, then you need State

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
