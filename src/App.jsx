import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header/Header";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;

//TODO:

//Expenses added to Database per User
//Delete Function on Expenses
//Update/Edit Expense function?
//Cohesive Styling amongst whole App

//On 4th video 26:30

//FOUND WHAT WAS WRONG commented out store
//Don't forget you commented out request in ExpenseController - fixed 400 error
//When uncomment store reducers we have a new console error to deal with tomorrow
//SOLVED: 5 min later, I had fulfilled instead of fulfiller in ExpenseSlice extrareducers lol

//So expense in devtools isnt showing everything. I believe I need to fix my schema to show multiple fields
//NOW REALLY ONTO TOMORROW GO TO BED!

//5/12/23

//Fixed some issues. One issue, the correct Date State is not getting passed to DB. Its current day not what is chosen
//FIXED @2:25pm!

//NEW ERROR WITH STATE
//After video on 33:45
