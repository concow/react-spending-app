import axios from "axios";

//Backend Request URL
const API_URL = "http://localhost:3000/api/users/";

//Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Login User
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Logout User
const logout = () => {
  localStorage.removeItem("user");
  console.log("In Auth Service");
};

const AuthService = {
  register,
  logout,
  login,
};

export default AuthService;
