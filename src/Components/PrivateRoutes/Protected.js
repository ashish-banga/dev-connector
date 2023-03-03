import React, { useEffect } from "react";
const Protected = (props) => {
  const { Component } = props;
  useEffect(() => {});
  if (condition) {
    return;
  }
  return (
    <div>
      <Component />
    </div>
  );
};
export default Protected;
