import React from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="text-left my-8 mx-6">
      <h2 className="text-4xl text-cyan-400 font-bold py-3	">Sign In</h2>
      <h4 className="text-xl">Sign Into Your Account</h4>
      <InputField placeholder="Email Address" type="email" />
      <InputField placeholder="Password" type="password" />
      <br />
      <Button title="Login" />
      <p className="mt-2">
        Don't have an account?
        <Link to="/signup" className="text-blue-700 text-sm">
          {" "}
          Sign Up
        </Link>
      </p>
    </div>
  );
};
export default SignIn;
