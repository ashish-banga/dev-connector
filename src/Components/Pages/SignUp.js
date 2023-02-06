import React, { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import { Link } from "react-router-dom";
const SignUp = (props) => {
  const [signInInput, setSignInInput] = useState({
    enteredName: "",
    enteredEmail: "",
    enteredPass: "",
    enteredConfirmPass: "",
  });

  const onSubmit = (e) => {
    if (!signInInput.enteredName.trim()) {
      alert("Please enter name!");
    } else if (
      !signInInput.enteredEmail.trim() ||
      !signInInput.enteredEmail.includes("@")
    ) {
      alert("Please enter correct Email address!");
    } else if (signInInput.enteredPass.length < 8) {
      alert("Please enter atleast 8 digits password");
    } else if (signInInput.enteredPass !== signInInput.enteredConfirmPass) {
      alert("Password don't match");
    }
    console.log(signInInput);
  };

  const onChangeHandler = (e) => {
    setSignInInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="flex bg-gradient-to-r from-slate-300 to-gray-800">
      <div className="text-left h-screen py-20 px-6 w-3/5">
        <h2 className="text-4xl text-cyan-400 font-bold py-3	">Sign Up</h2>
        <h4 className="text-xl pb-3">Create Your Account</h4>
        <InputField
          name={"enteredName"}
          onChange={onChangeHandler}
          placeholder="Name"
          type="text"
          value={signInInput.enteredName}
        />
        <InputField
          name={"enteredEmail"}
          onChange={onChangeHandler}
          placeholder="Email Address"
          type="email"
          value={signInInput.enteredEmail}
        />
        <p className="text-xs pt-1">
          This site uses Gravatar so if you want a profile image, use a Gravatar
          email.
        </p>
        <InputField
          name={"enteredPass"}
          onChange={onChangeHandler}
          placeholder="Password"
          type="password"
        />
        <InputField
          name={"enteredConfirmPass"}
          onChange={onChangeHandler}
          placeholder="Confirm Password"
          type="password"
        />
        <br />
        <br />
        <Button onClick={onSubmit} title="Register" />
        <p className="mt-4">
          Already have an account?
          <Link to="/signin" className="text-blue-700 text-sm">
            {" "}
            Sign In
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
export default SignUp;
