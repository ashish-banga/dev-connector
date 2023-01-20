import React from "react";
const Button = (props) => {
  return (
    <button
      onClick={props.onclick}
      className="p-2 w-24 mt-6 mr-6 font-medium rounded-lg bg-cyan-300 text-black"
    >
      {props.title}
    </button>
  );
};
export default Button;
