import React from "react";
import Button from "../UI/Button";
import {
  FaUserAlt,
  FaUserCircle,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="h-auto bg-gradient-to-r from-slate-200 to-gray-800 pt-20 pb-8 px-56">
      <h2 className="text-4xl text-cyan-600 font-bold">Dashboard</h2>
      <div className="flex py-4">
        <FaUserAlt />
        <p className="leading-none px-1	mb-1">Welcome Ashish Banga</p>
      </div>
      <div>
        <Link to="/profile">
          <Button title="Edit Profile" icon={<FaUserCircle />} />
        </Link>
        <Link to="/experience">
          <Button title="Add Experience" icon={<FaUserTie />} />
        </Link>
        <Link to="/education">
          <Button title="Add Education" icon={<FaUserGraduate />} />
        </Link>

        <div>
          <h4 className="py-3 text-2xl font-semibold">
            Experience Credentials
          </h4>
          <table className=" text-left table-auto border-separate	border-spacing-2">
            <tr className="children: font-semibold text-lg bg-slate-200 mx-4 text-center">
              <td>Company</td>
              <td>Title</td>
              <td>Years</td>
            </tr>
            <tr>
              <td>Tech Guy Web Solutions</td>
              <td>Senior Developer</td>
              <td>Mar-2009 to Feb-2014 </td>
              <td>{<Button title="Delete" />}</td>
            </tr>
            <tr>
              <td>Traversy Media</td>
              <td>Instructor and Developer</td>
              <td>Feb-2014 to Now</td>
              <td>{<Button title="Delete" />}</td>
            </tr>
          </table>
        </div>
        <div>
          <h4 className="py-2 text-2xl font-semibold">Education Credentials</h4>
          <table className="text-left table-auto border-separate	border-spacing-2	mb-2">
            <tr className="children: font-semibold text-lg bg-slate-200 mx-4 text-center">
              <td>School</td>
              <td>Degree</td>
              <td>Years</td>
            </tr>
            <tr>
              <td>Northern Essex</td>
              <td>Associates</td>
              <td>Mar-2007 to Feb-2009 </td>
              <td>
                <Button title="Delete" />
              </td>
            </tr>
          </table>
        </div>
        <Button title="Delete My Account" />
      </div>
    </div>
  );
};
export default Dashboard;
