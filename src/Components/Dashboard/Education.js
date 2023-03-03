import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import { educationAction } from "../../redux/actions/auth.actions";

const Education = () => {
  const [educationInput, setEducationInput] = useState({
    enteredSchool: "",
    enteredDegree: "",
    enteredStudy: "",
    enteredFromDate: "",
    enteredToDate: "",
    enteredDesciption: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputChangeHandler = (e) => {
    setEducationInput((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const onSubmit = () => {
    dispatch(educationAction(educationInput));
    setEducationInput({
      enteredSchool: "",
      enteredDegree: "",
      enteredStudy: "",
      enteredFromDate: "",
      enteredToDate: "",
      enteredDesciption: "",
    });
    navigate("/dashboard");
  };
  return (
    <div className="h-auto bg-gradient-to-r from-slate-200 to-gray-800 pt-20 pb-8 px-56">
      <h1 className="text-4xl text-cyan-600 font-semibold">
        Add Your Education
      </h1>
      <p>Add any school, bootcamp, etc that you have attended.</p>
      <InputField
        name={"enteredSchool"}
        onChange={inputChangeHandler}
        placeholder="* School or Bootcamp"
        type="text"
        value={educationInput.enteredSchool}
      />
      <InputField
        name={"enteredDegree"}
        onChange={inputChangeHandler}
        placeholder="* Degree or Certificate"
        type="text"
        value={educationInput.enteredDegree}
      />
      <InputField
        name={"enteredStudy"}
        onChange={inputChangeHandler}
        placeholder="Field of Study"
        type="text"
        value={educationInput.enteredStudy}
      />
      <InputField
        name={"enteredFromDate"}
        onChange={inputChangeHandler}
        type="date"
        value={educationInput.enteredFromDate}
      />
      <label className=" text-xs font-semibold">From Date</label>
      <InputField
        name={"enteredToDate"}
        onChange={inputChangeHandler}
        type="date"
        value={educationInput.enteredToDate}
      />
      <label className=" text-xs font-semibold">To Date</label>
      <div className="flex gap-2 my-2">
        <input type="checkbox"></input>
        <p className="text-sm font-semibold">Current School</p>
      </div>
      <textarea
        name={"enteredDesciption"}
        onChange={inputChangeHandler}
        className="w-full h-20 p-2 my-4 rounded-md border border-black bg-yellow-50 mb-1"
        placeholder="Program Description"
        value={educationInput.enteredDesciption}
      />
      <br />
      <Button onClick={onSubmit} title="Submit" />
      <Link to="/dashboard">
        <Button title="Go Back" />
      </Link>
    </div>
  );
};
export default Education;
