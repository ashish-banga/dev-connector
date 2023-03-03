import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import Button from "../UI/Button";
import PostItem from "./PostItem";
import { useDispatch, useSelector } from "react-redux";
import { PostAction, PostActionUpdate } from "../../redux/actions/auth.actions";
const Posts = () => {
  const [createPost, setCreatePost] = useState("");
  const dispatch = useDispatch();
  const postArray = useSelector((state) => state.PostReducer.postData);
  const profileName = useSelector(
    (state) => state.AuthReducer.loginData[0].enteredName
  );
  const profileImage = "/images/SD-3.jpg";
  const createPostHandler = (e) => {
    setCreatePost(e.target.value);
  };
  const postAction = (i, actionType) => {
    dispatch(PostActionUpdate(i, actionType));
  };
  const submitPostData = () => {
    const postDetails = {
      name: profileName,
      postData: createPost,
      image: profileImage,
      count: 1,
    };
    dispatch(PostAction(postDetails));
    setCreatePost("");
  };
  return (
    <div className=" min-h-screen	 bg-gradient-to-r from-slate-200 to-gray-800 pt-20 pb-10 px-56">
      <h2 className="text-4xl text-cyan-600 font-bold">Posts</h2>
      <div className="flex py-4">
        <FaUserAlt />
        <p className="leading-none px-1	mb-1">Welcome to the community!</p>
      </div>
      <p className="bg-cyan-400 text-white font-medium px-2">Say Something..</p>
      <textarea
        onChange={createPostHandler}
        className="w-full h-20 p-2 my-4 rounded-md border border-black bg-yellow-50"
        placeholder="Create a post"
        value={createPost}
      ></textarea>
      <Button onClick={submitPostData} title="Submit" />
      {postArray.length > 0 ? (
        <div>
          <PostItem postList={postArray} postAction={postAction} />
        </div>
      ) : (
        <div className=" bg-yellow-50 border border-black	border-solid rounded-md p-2 my-8">
          <p className="my-2">Currently, No Posts available.</p>
        </div>
      )}
    </div>
  );
};
export default Posts;
