import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { experienceAction } from "../../redux/actions/auth.actions";
import Button from "../UI/Button";
import InputField from "../UI/InputField";

const Experience = () => {
  const [experienceInput, setExperienceInput] = useState({
    enteredTitle: "",
    enteredCompany: "",
    enteredLocation: "",
    enteredJoiningDate: "",
    enteredLastDate: "",
    enteredJobDescription: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    setExperienceInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const onSubmit = () => {
    dispatch(experienceAction(experienceInput));
    setExperienceInput({
      enteredTitle: "",
      enteredCompany: "",
      enteredLocation: "",
      enteredJoiningDate: "",
      enteredLastDate: "",
      enteredJobDescription: "",
    });
    navigate("/dashboard");
  };
  return (
    <div className=" h-auto bg-gradient-to-r from-slate-200 to-gray-800 pt-20 pb-8 px-56">
      <h1 className="text-4xl text-cyan-600 font-semibold">
        Add An Experience
      </h1>
      <p>
        Add any developer/programming positions that you have had in the past.
      </p>
      <InputField
        name={"enteredTitle"}
        onChange={inputChangeHandler}
        placeholder="* Job Title"
        type="text"
        value={experienceInput.enteredTitle}
      />
      <InputField
        name={"enteredCompany"}
        onChange={inputChangeHandler}
        placeholder="* Company"
        type="text"
        value={experienceInput.enteredCompany}
      />
      <InputField
        name={"enteredLocation"}
        onChange={inputChangeHandler}
        placeholder="Location"
        type="text"
        value={experienceInput.enteredLocation}
      />
      <InputField
        name={"enteredJoiningDate"}
        onChange={inputChangeHandler}
        type="date"
        value={experienceInput.enteredJoiningDate}
      />
      <label className=" text-xs font-semibold">From Date</label>
      <InputField
        name={"enteredLastDate"}
        onChange={inputChangeHandler}
        type="date"
        value={experienceInput.enteredLastDate}
      />
      <label className=" text-xs font-semibold">To Date</label>
      <div className="flex gap-2 my-2">
        <input type="checkbox"></input>
        <p className="text-sm font-semibold">Current Job</p>
      </div>
      <textarea
        name={"enteredJobDescription"}
        onChange={inputChangeHandler}
        className="w-full h-20 p-2 my-4 rounded-md text-black border border-black bg-yellow-50"
        placeholder="Job Description"
        value={experienceInput.enteredJobDescription}
      />
      <br />
      <Button onClick={onSubmit} title="Submit" />
      <Link to="/dashboard">
        <Button title="Go Back" />
      </Link>
    </div>
  );
};
export default Experience;
