import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Expenses from "../components/Expenses/Expenses";
import NewExpense from "../components/NewExpense/NewExpense";
import Spinner from "../components/UI/Spinner";
import { getExpenses, reset } from "../features/expenses/ExpenseSlice";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { expenses, isLoading, isError, message } = useSelector(
    (state) => state.expenses
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      console.log("Do I get to here (!user)? " + user + isError);
      navigate("/login");
      console.log("Do we Get after navigate(/login)" + user + isError);
    }

    dispatch(getExpenses());

    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="name-heading">
        <h4>Welcome, {user && user.name}</h4>
      </div>
      <div className="dashboard-logo">Expense Dashboard</div>
      <NewExpense />
      <div className="expenses_">
        <Expenses items={expenses} />
      </div>
    </div>
  );
}
