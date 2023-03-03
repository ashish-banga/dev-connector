import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const AuthValid = useSelector((state) => state.AuthReducer.loginData);
  console.log("AuthValidAuthValid", AuthValid);
  const [authArray, setAuthArray] = useState([]);
  useEffect(() => {
    setAuthArray(AuthValid);
  }, [AuthValid]);
  const clearLogin = (AuthValid) => {
    return (AuthValid = AuthValid.pop());
  };
  const loginRoute = (
    <>
      {/* <li>
        <Link to="/developers"> Devlopers </Link>
      </li> */}
      <li>
        <Link to="/posts"> Posts </Link>
      </li>
      <li>
        <Link onClick={clearLogin} to="/signin">
          Logout
        </Link>
      </li>
    </>
  );
  const logoutRoute = (
    <>
      <li>
        <Link to="/signup"> Register </Link>
      </li>
      <li>
        <Link to="/signin"> Login </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed w-screen">
      <ul className="flex justify-between px-8 py-4 bg-gray-600 text-cyan-100 border-b-4 border-blue-500	">
        <li className="font-bold">
          {authArray.length > 0 ? (
            <Link to="/dashboard"> DevConnector </Link>
          ) : (
            <Link to="/">DevConnector</Link>
          )}
        </li>
        <div className="flex space-x-8">
          {authArray.length > 0 ? loginRoute : logoutRoute}
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
