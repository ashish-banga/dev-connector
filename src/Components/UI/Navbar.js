import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="fixed w-screen">
      <ul className="flex justify-between px-8 py-4 bg-gray-600 text-cyan-100 border-b-4 border-blue-500	">
        <li className="font-bold">
          <Link to="/"> DevConnector </Link>
        </li>
        <div className="flex space-x-8">
          <li>
            <Link to="/developers"> Devlopers </Link>
          </li>
          <li>
            <Link to="/posts"> Posts </Link>
          </li>
          <li>
            <Link to="/signup"> Register </Link>
          </li>
          <li>
            <Link to="/signin"> Login </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
