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

//LOGINS:
//test@gmail.com
//123

//connor@gmail.com
//12345

//TODO:
//Cohesive Styling amongst whole App
//Deployment!

//5/16/23 PM
//Full working app. Now all left is
//CSS / Styling (Simple Cohesive among all components)
//Deployment
//Update README.md and instructions

// 5/18/23 PM
//Left TODO: DEPLOYMENT, README.md, Maybe more Styling.
//Logout not fulfilled but App works.
//Commented out a piece of code in Dashboard useEffect, that reset the State on Mount. It was putting
//me in that infinite loop. Without that useEffect won't reload and reset, expenses or user. until reloaded manually
//can see this in redux dev tools
