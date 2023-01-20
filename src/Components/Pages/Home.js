import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  const signInHandler = () => {
    let path = `/signin`;
    navigate(path);
  };
  const signUpHandler = () => {
    let path = `/signup`;
    navigate(path);
  };
  return (
    <>
      <div
        className=" bg-no-repeat bg-cover text-white"
        style={{
          height: "90vh",
          width: "100%",
          "background-image":
            "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'",
        }}
      >
        <div className="w-7/12 m-auto">
          <h1 className="text-5xl pt-40 pb-4 font-bold">Developer Connector</h1>
          <h4 className="text-xl">
            Create a developer profile/portfolio, share posts and get help from
            other developers.
          </h4>
          <Button onclick={signUpHandler} className="" title="Sign Up" />
          <Button onclick={signInHandler} className="" title="Login" />
        </div>
      </div>
    </>
  );
};

export default Home;
