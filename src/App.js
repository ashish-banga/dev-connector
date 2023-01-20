import "./App.css";
import React from "react";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/UI/Navbar";
import SignUp from "./Components/Pages/SignUp";
import SignIn from "./Components/Pages/SignIn";
import Developers from "./Components/Pages/Developers";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/developers" element={<Developers />} />
      </Routes>
    </div>
  );
}

export default App;
