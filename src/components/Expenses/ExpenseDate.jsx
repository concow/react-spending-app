import "../ExpensesCSS/ExpenseDate.css";

export default function ExpenseDate({ date }) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.toLocaleString("en-US", { month: "long" });
  const day = newDate.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
