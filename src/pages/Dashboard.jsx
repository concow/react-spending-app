import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
import Spinner from "../components/UI/Spinner";
import { getExpenses, reset } from "../features/expenses/ExpenseSlice";
import "./Dashboard.css";
export default function Dashboard() {
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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="name-heading">
        <h4>Welcome {user && user.name}</h4>
      </div>
      <p>Expense Dashboard</p>
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      <NewExpense />
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
