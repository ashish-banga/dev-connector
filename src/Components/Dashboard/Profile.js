import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
const Profile = () => {
  return (
    <div className=" h-auto bg-gradient-to-r from-slate-200 to-gray-800 pt-20 pb-8 px-56">
      <h1 className="text-4xl text-cyan-600 font-bold">Create Your Profile</h1>
      <div className="flex leading-none py-4 gap-1">
        <FaUserAlt />
        <p>Let's get some information to make your profile stand out.</p>
      </div>
      <label className="flex flex-col text-xs text-slate-700">
        <select className=" bg-yellow-50 text-sm p-1 rounded-lg text-slate-700 my-1">
          <option selected disabled hidden>
            Select Professional Status
          </option>
          <option value="trainee">Software Engineer Trainee</option>
          <option value="sde">Software Engineer</option>
          <option value="sde2">Senior Software Engineer</option>
          <option value="lead">Team Lead</option>
          <option value="manager">Development Manager</option>
          <option value="s_manager">Development Senior Manager</option>
        </select>
        Give us an idea of where you are at your career.
      </label>
      <label className="flex flex-col text-xs text-slate-700">
        <InputField placeholder="Company" />
        Could be your own company or one you work for.
      </label>
      <label className="flex flex-col text-xs text-slate-700">
        <InputField placeholder="Website" />
        Could be your own or a company website
      </label>
      <label className="flex flex-col text-xs text-slate-700">
        <InputField placeholder="Location" />
        City & State Suggested(eg. Faridabad, HR)
      </label>
      <label className="flex flex-col text-xs text-slate-700">
        <InputField placeholder="* Skills" />
        Please use comma seperated values
      </label>
      <label className="flex flex-col text-xs text-slate-700">
        <InputField placeholder="Github Username" />
        If you want your latest repos and Github Link, include your username
      </label>
      <label className="flex flex-col text-xs text-slate-700">
        <textarea
          className="w-full h-20 p-2 mt-5 rounded-md text-sm border border-black"
          placeholder="A short bio of yourself"
        ></textarea>
        If you want your latest repos and Github Link, include your username
      </label>
      <div className="mt-5">
        <Button title="Submit" />
        <Link to="/dashboard">
          <Button title="Go Back" />
        </Link>
      </div>
    </div>
  );
};
export default Profile;
