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
//ONE STATE
//Cohesive Styling amongst whole App
//Deployment!

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
//In dashboard: Cannot destructure property 'expenses' of 'useSelector(...)' as it is undefined.
//Leave off here for the day

//UPDATE! FIXED IT.. I expense not expenses in my store! lolz

//5/13/23
//Update: So working however, I seem to have two different states, and I need to figure that out better.
//So then I can follow the video and have it persist to backend and delete. I think I can figure it out
//just gonna take some time to reorganize functions from previous State.

//IMPORTANT! The beauty with Redux, is I dispatched from ExpenseForm to my Slice,
// then brought it to Dashboard all with dispatch. I don't need props and shit and handler
//functions play around with it that way... I think it can work. Of course it can. Follow from
//Video 34:20 start there.

//1:00AM you got the data there! Just figure what to do with it!

//5/15 Solved some major issues today! An update on what I need to do..
// Adding new item again..
// Filtering items by Year
// Chart Working
// Displaying Date
//
//
// --LATER--
// Cohesive styling
// Deployment

//5/16/23 AM

//Kicking Ass 1PM
//Fixed Date, thats is displaying now
//Refactored adding new Expense to new state, that is working now!

//4 ITEMS LEFT:
//Next, is showing filtered items by year
//Then show that working with Chart display..
//CSS / Styling (Cohesive)
//Deployment

//5/16/23 PM
//Full working app. Now all left is
//CSS / Styling (Simple Cohesive among all components)
//Deployment
