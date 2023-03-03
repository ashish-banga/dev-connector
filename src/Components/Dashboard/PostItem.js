import React from "react";
import Button from "../UI/Button";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const PostItem = (props) => {
  const { postList, postAction } = props;

  return (
    <>
      {postList.map((post, i) => {
        return (
          <div className="flex border border-black	border-solid my-5	p-3 bg-yellow-50 rounded-lg ">
            <div className=" w-1/6 m-auto px-2">
              <div className=" flex justify-center">
                <img
                  className="h-20 w-20 rounded-full align-middle"
                  src={post.image}
                  alt="Software Developer"
                />
              </div>
              <p className="pt-2 text-center">{post.name}</p>
            </div>
            <div className="w-5/6 ml-10">
              <div className=" h-2/3 w-fit">
                <p>{post.postData}</p>
              </div>
              <div className="h-1/3 mt-1">
                <Button
                  icon={<FaRegThumbsUp />}
                  onClick={() => postAction(i, "POST_ADDLIKE")}
                  title={post.count}
                />
                <Button
                  icon={<FaRegThumbsDown />}
                  onClick={() => postAction(i, "POST_DISLIKE")}
                />
                <Button
                  onClick={() => postAction(i, "POST_DELETE")}
                  title="Delete"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default PostItem;
