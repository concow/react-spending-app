import axios from "axios";

//Backend Request URL
const API_URL = "http://localhost:3000/api/expenses/";

//Create New Expense communicating with our Backend
const createExpense = async (expenseData, token) => {
  console.log("in ExpenseService");
  console.log(token);
  console.log(expenseData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, expenseData, config);
  console.log("In ExpenseService");
  console.log("ExpenseData", expenseData);
  console.log("response.data", response.data);
  return response.data;
};

//Get user Expenses
const getExpenses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const ExpenseService = {
  createExpense,
  getExpenses,
};

export default ExpenseService;
