import React, { useState } from "react";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/auth.actions";
const SignIn = () => {
  const [loginInput, setLoginInput] = useState([
    {
      loginEmail: "",
      loginPass: "",
    },
  ]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.SignUpReducer.userSession);
  const AuthValid = useSelector((state) => state.AuthReducer.loginData);
  console.log("signIn", userData);
  const loginChangeHandler = (e) => {
    setLoginInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const onLogin = () => {
    {
      AuthValid.length > 0 ? navigate("/dashboard") : navigate("/signin");
    }
    dispatch(loginAction(userData, loginInput));
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
