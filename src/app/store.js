import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/AuthSlice";
import expenseReducer from "../features/expenses/ExpenseSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    //I HAD expense here not plural... gave me that useSelector() error in Dashboard.jsx
    expenses: expenseReducer,
  },
});
