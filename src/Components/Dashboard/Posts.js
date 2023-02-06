import React from "react";
import {
  FaUserAlt,
  FaUserCircle,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";
import { useState } from "react";
import Button from "../UI/Button";
import PostItem from "./PostItem";
const Posts = () => {
  const [createPost, setCreatePost] = useState("");
  const createPostHandler = (e) => {
    setCreatePost(e.target.value);
  };
  return (
    <div className="h-screen bg-gradient-to-r from-slate-200 to-gray-800 py-20 px-56">
      <h2 className="text-4xl text-cyan-600 font-bold">Posts</h2>
      <div className="flex py-4">
        <FaUserAlt />
        <p className="leading-none px-1	mb-1">Welcome to the community!</p>
      </div>
      <p className="bg-cyan-400 text-white font-medium px-2">Say Something..</p>
      <textarea
        onChange={createPostHandler}
        className="w-full h-20 p-2 my-4 rounded-md border border-black"
        placeholder="Create a post"
        value={createPost}
      ></textarea>
      <Button title="Submit" />
      <div>
        <PostItem />
      </div>
    </div>
  );
};
export default Posts;
