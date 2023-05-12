import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ExpenseService from "./ExpenseService";

const initialState = {
  expenses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new Expense - Initialize from Frontend
export const createExpense = createAsyncThunk(
  "expenses/create",
  async (expenseData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await ExpenseService.createExpense(expenseData, token);
    } catch (error) {
      const message =
        (error.reponse && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get User Expenses
export const getExpenses = createAsyncThunk(
  "expenses/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await ExpenseService.getExpenses(token);
    } catch (error) {
      const message =
        (error.reponse && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createExpense.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createExpense.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.expenses.push(action.payload);
      })
      .addCase(createExpense.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getExpenses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.expenses = action.payload;
      })
      .addCase(getExpenses.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = expenseSlice.actions;
export default expenseSlice.reducer;
