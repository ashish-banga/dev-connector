import "./App.css";
import React from "react";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/UI/Navbar";
import SignUp from "./Components/Pages/SignUp";
import SignIn from "./Components/Pages/SignIn";
import Developers from "./Components/Pages/Developers";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Experience from "./Components/Dashboard/Experience";
import Education from "./Components/Dashboard/Education";
import Profile from "./Components/Dashboard/Profile";
import Posts from "./Components/Dashboard/Posts";
//import Protected from "./Components/PrivateRoutes/Protected";
import { useSelector } from "react-redux";

function App() {
  const AuthValid = useSelector((state) => state.AuthReducer.loginData);
  console.log("Auth", AuthValid);
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        {/* <Route exact path="/developers" element={<Developers />} /> */}
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
