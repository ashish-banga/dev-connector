import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import InputField from "../UI/InputField";

const Education = () => {
  return (
    <div className="h-auto bg-gradient-to-r from-slate-200 to-gray-800 pt-20 pb-8 px-56">
      <h1 className="text-4xl text-cyan-600 font-semibold">
        Add Your Education
      </h1>
      <p>Add any school, bootcamp, etc that you have attended.</p>
      <InputField placeholder="* School or Bootcamp" />
      <InputField placeholder="* Degree or Certificate" />
      <InputField placeholder="Field of Study" />
      <InputField type="date" />
      <label className=" text-xs font-semibold">From Date</label>
      <InputField type="date" />
      <label className=" text-xs font-semibold">To Date</label>
      <div className="flex gap-2 my-2">
        <input type="checkbox"></input>
        <p className="text-sm font-semibold">Current School</p>
      </div>
      <textarea
        className="w-full h-20 p-2 my-4 rounded-md border border-black"
        placeholder="Program Description"
      ></textarea>
      <br />
      <Button title="Submit" />
      <Link to="/dashboard">
        <Button title="Go Back" />
      </Link>
    </div>
  );
};
export default Education;
