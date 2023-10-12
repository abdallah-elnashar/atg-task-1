import React, { Fragment } from "react";
import { AiFillCalendar, AiOutlineEye } from "react-icons/ai";
import { BsFillShareFill, BsThreeDots } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import data from "../utils/constants";

const Post = () => {
  return (
    <ul>
      {data.map((post) => (
        <li>
          <div className="flex border-2 rounded-lg overflow-hidden mb-2 border-[#e0e0e0] flex-col  sm:w-[600px]  md:h-[472px] md:w-[692px]">
            <img
              src={post.image}
              alt="image"
              className="h-[220px] w-full object-cover"
            />
            <div className="flex flex-col px-2">
              <p className=" text-lg font-semibold py-[4px] px-1">
                {post.type}
              </p>
              {post.post && (
                <Fragment>
                  <div className="flex items-start justify-between px-[4px]">
                    <h2 className=" w-[80%] font-bold text-[22px]">
                      {post.heading}
                    </h2>
                    <BsThreeDots size={25} />
                  </div>
                  <p className="w-[100%] px-[8px] mt-[8px] text-[19px] text-gray-500">
                    {post.description}
                  </p>
                </Fragment>
              )}
              {!post.post && (
                <Fragment>
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between px-[4px]">
                      <h2 className=" w-[80%] font-bold text-[22px]">
                        {post.heading}
                      </h2>
                      <BsThreeDots size={25} />
                    </div>
                    <div className="flex  gap-[60px] items-center">
                      <p className=" flex items-center gap-[4px] text-black text-sm">
                        <span>
                          <AiFillCalendar />
                        </span>
                        {post.description}
                      </p>
                      <p className="flex items-center gap-[4px] text-black text-sm">
                        <span>
                          <MdOutlinePlace />
                        </span>
                        {post.location}
                      </p>
                    </div>
                    <button
                      className={` ${
                        post.job
                          ? " text-[#02B875]  border-[#02B875]"
                          : " text-red-500  border-red-500"
                      }  py-1 flex justify-center text-lg font-bold text-center mt-3 rounded-3xl border-2`}
                    >
                      {post.button}
                    </button>
                  </div>
                </Fragment>
              )}
              <div className="flex  mt-[22px] items-center justify-between">
                <div className="flex items-center gap-[8px] px-[4px]">
                  <img src={post.portfolio} alt="face" />
                  <p className="font-bold text-black text-lg">{post.name}</p>
                </div>
                <div className="flex items-center gap-5 mr-5">
                  <p className="flex items-center text-sm gap-2 text-[#525252]">
                    <AiOutlineEye size={20} /> {post.views} views
                  </p>
                  <div className=" rounded  h-[30px] w-[34px] flex items-center justify-center  bg-gray-300">
                    <BsFillShareFill size={15} className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Post;
