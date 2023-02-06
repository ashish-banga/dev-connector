import React from "react";
import Button from "../UI/Button";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const PostItem = () => {
  let count = 4;
  return (
    <div className="flex border border-black	border-solid my-5	p-3 bg-yellow-50 ">
      <div className="w-1/5 m-auto px-2">
        <img
          className="h-24 w-24 rounded-full"
          src="/images/SD-3.jpg"
          alt="Software Developer"
        />
        <p className="pt-2">Ashish Banga</p>
      </div>
      <div className="w-4/5">
        <p>
          My name is Ashish Banga. I have joined Damco as a Software Engineer
          Trainee, I am currently working on React as my main Stack. I have been
          involved in other projects in my previous organisation. I will look
          forward to work with the great minds here at Damco.
        </p>
        <div className="mt-6">
          <Button icon={<FaRegThumbsUp />} title={count} />
          <Button icon={<FaRegThumbsDown />} />
          <Button title="Comments" />
        </div>
      </div>
    </div>
  );
};
export default PostItem;
