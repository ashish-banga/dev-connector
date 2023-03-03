import React from "react";
import Button from "../UI/Button";
import {
  FaUserAlt,
  FaUserCircle,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  experienceDelete,
  educationDelete,
} from "../../redux/actions/auth.actions";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AuthValid = useSelector((state) => state.AuthReducer.loginData);
  const profileInfo = useSelector((state) => state.ProfileReducer.profileData);
  const educationInfo = useSelector(
    (state) => state.EducationReducer.educationData
  );
  const experienceInfo = useSelector(
    (state) => state.ExperienceReducer.experienceData
  );
  const profileName = useSelector(
    (state) => state.AuthReducer.loginData[0].enteredName
  );
  const deleteAccount = () => {
    AuthValid.pop();
    navigate("/signup");
  };
  console.log("ProfileReducer", profileInfo);
  console.log("23", educationInfo);
  console.log("24", experienceInfo);
  const experienceDeleteHandler = (i) => {
    dispatch(experienceDelete(i));
  };
  const educationDeleteHandler = (i) => {
    dispatch(educationDelete(i));
  };
  return (
    <div className="min-h-screen	 bg-gradient-to-r from-slate-200 to-gray-800 pt-20 pb-8 px-48">
      <h2 className="text-4xl text-cyan-600 font-bold">Dashboard</h2>
      <div className="flex py-4">
        <FaUserAlt />
        <p className="leading-none px-1	mb-1">Welcome {profileName}</p>
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
          {experienceInfo.length > 0 ? (
            <table className=" text-center table-auto border-separate	border-spacing-2">
              <tr className="children: font-semibold text-lg bg-slate-200 mx-4">
                <td className=" w-1/3">Company</td>
                <td className=" w-1/3">Title</td>
                <td className=" w-1/3">Years</td>
              </tr>
              {experienceInfo.map((data, i) => {
                return (
                  <tr>
                    <td className=" w-1/4">{data.enteredCompany}</td>
                    <td className=" w-1/4">{data.enteredTitle}</td>
                    <td className=" w-1/4">
                      {data.enteredJoiningDate} to {data.enteredLastDate}
                    </td>
                    <td className=" w-1/4">
                      {
                        <Button
                          onClick={() => experienceDeleteHandler(i)}
                          title="Delete"
                        />
                      }
                    </td>
                  </tr>
                );
              })}
            </table>
          ) : (
            <p>Please Add Experience Details</p>
          )}
        </div>
        <div>
          <h4 className="py-2 text-2xl font-semibold">Education Credentials</h4>
          {educationInfo.length > 0 ? (
            <table className="text-center table-auto border-separate	border-spacing-2	mb-2">
              <tr className="children: font-semibold text-lg bg-slate-200 mx-4 text-center">
                <td className=" w-1/3">School</td>
                <td className=" w-1/3">Degree</td>
                <td className=" w-1/3">Years</td>
              </tr>
              {educationInfo.map((data, i) => {
                return (
                  <tr>
                    <td className=" w-1/4">{data.enteredSchool}</td>
                    <td className=" w-1/4">{data.enteredDegree}</td>
                    <td className=" w-1/4">
                      {data.enteredFromDate} to {data.enteredToDate}
                    </td>
                    <td className=" w-1/4">
                      <Button
                        onClick={() => educationDeleteHandler(i)}
                        title="Delete"
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          ) : (
            <p className=" mb-4">Please enter Education Details.</p>
          )}
        </div>
        <Button onClick={deleteAccount} title="Delete My Account" />
      </div>
    </div>
  );
};
export default Dashboard;
