import React from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import { Link } from "react-router-dom";
const SignUp = (props) => {
  return (
    <div className="text-left my-8 mx-6">
      <h2 className="text-4xl text-cyan-400 font-bold py-3	">Sign Up</h2>
      <h4 className="text-xl">Create Your Account</h4>
      <InputField placeholder="Name" type="text" />
      <InputField placeholder="Email Address" type="email" />
      <p className="text-xs pt-1">
        This site uses Gravatar so if you want a profile image, use a Gravatar
        email.
      </p>
      <InputField placeholder="Password" type="password" />
      <InputField placeholder="Confirm Password" type="password" />
      <br />
      <Button title="Register" />
      <p className="mt-2">
        Already have an account?
        <Link to="/signin" className="text-blue-700 text-sm">
          {" "}
          Sign In
        </Link>
      </p>
    </div>
  );
};
export default SignUp;
