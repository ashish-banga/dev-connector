import React, { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [loginInput, setLoginInput] = useState({
    loginEmail: "",
    loginPass: "",
  });
  const loginChangeHandler = (e) => {
    setLoginInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const onLogin = () => {
    console.log(loginInput);
  };
  return (
    <div className="flex bg-gradient-to-r from-slate-200 to-gray-800">
      <div className="text-left py-24 px-6 h-screen w-3/5">
        <h2 className="text-4xl text-cyan-400 font-bold py-3	">Sign In</h2>
        <h4 className="text-xl pb-3">Sign Into Your Account</h4>
        <InputField
          name={"loginEmail"}
          onChange={loginChangeHandler}
          placeholder="Email Address"
          type="email"
          value={loginInput.loginEmail}
        />
        <InputField
          name={"loginPass"}
          onChange={loginChangeHandler}
          placeholder="Password"
          type="password"
          value={loginInput.loginPass}
        />
        <br />
        <br />
        <Button onClick={onLogin} title="Login" />
        <p className="mt-4">
          Don't have an account?
          <Link to="/signup" className="text-blue-700 text-sm">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
      <div className="w-2/5 mt-20 mx-8">
        <div className="flex children: m-4">
          <img
            className=" h-44 w-44 rounded-xl"
            src="/images/SD-4.jfif"
            alt="Software Developer"
          />
          <img
            className="h-44 w-44 ml-16 mt-10 rounded-xl"
            src="/images/SD-1.jpg"
            alt="Software Developer"
          />
        </div>
        <div className="flex children: m-4">
          <img
            className="h-44 w-44 rounded-xl"
            src="/images/SD-3.jpg"
            alt="Software Developer"
          />
          <img
            className="h-44 w-44 ml-16 mt-10 rounded-xl"
            src="/images/SD-5.jpeg"
            alt="Software Developer"
          />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
