import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
import Spinner from "../components/UI/Spinner";
import { getExpenses, reset } from "../features/expenses/ExpenseSlice";
import "./Dashboard.css";
import NewTestData from "../components/Expenses/NewTestData";
// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 24.99,
//     date: new Date(2023, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.99,
//     date: new Date(2022, 6, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 449.99,
//     date: new Date(2022, 5, 12),
//   },
//   {
//     id: "e5",
//     title: "LG OLED 55",
//     amount: 1399.99,
//     date: new Date(2023, 9, 4),
//   },
// ];

export default function Dashboard() {
  const [expense, setExpense] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { expenses, isLoading, isError, message } = useSelector(
    (state) => state.expenses
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(
  //   useSelector((state) => {
  //     console.log(state.expenses);
  //   })
  // );

  useEffect(() => {
    if (isError) {
      console.log(isError);
    }
    if (!user) {
      navigate("/login");
    }

    dispatch(getExpenses());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="name-heading">
        <h4>Welcome {user && user.name}</h4>
      </div>
      <p>Expense Dashboard</p>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="expenses_">
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

// expenses.map((expense) => (
//   // console.log(expense)
//   <NewTestData key={expense._id} items={expense} />
// ));
