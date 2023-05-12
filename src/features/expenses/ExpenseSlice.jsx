import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = expenseSlice.actions;
export default expenseSlice.reducer;
