import React from "react";
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="px-4 py-2 mr-6 font-small shadow-md shadow-black rounded-lg bg-white text-black hover:bg-black hover:text-white"
    >
      <span className="flex gap-1 leading-none">
        {props.icon}
        {props.title}
      </span>
    </button>
  );
};
export default Button;
