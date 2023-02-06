import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import InputField from "../UI/InputField";

const Experience = () => {
  return (
    <div className=" h-auto bg-gradient-to-r from-slate-200 to-gray-800 pt-20 pb-8 px-56">
      <h1 className="text-4xl text-cyan-600 font-semibold">
        Add An Experience
      </h1>
      <p>
        Add any developer/programming positions that you have had in the past.
      </p>
      <InputField placeholder="* Job Title" />
      <InputField placeholder="* Company" />
      <InputField placeholder="Location" />
      <InputField type="date" />
      <label className=" text-xs font-semibold">From Date</label>
      <InputField type="date" />
      <label className=" text-xs font-semibold">To Date</label>
      <div className="flex gap-2 my-2">
        <input type="checkbox"></input>
        <p className="text-sm font-semibold">Current Job</p>
      </div>
      <textarea
        className="w-full h-20 p-2 my-4 rounded-md text-black border border-black"
        placeholder="Job Description"
      ></textarea>
      <br />
      <Button title="Submit" />
      <Link to="/dashboard">
        <Button title="Go Back" />
      </Link>
    </div>
  );
};
export default Experience;
