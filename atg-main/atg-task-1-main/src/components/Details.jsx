import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
const Details = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center w-[240px] py-2 justify-between border-b-2 border-gray-400">
        <p className="flex gap-1 items-center">
          <span>
            {" "}
            <GrLocation />
          </span>
          Noida, India
        </p>
        <p>
          <MdEdit />
        </p>
      </div>
      <div className="w-[240px] flex gap-3 items-center mt-5 px-2">
        <p className="  text-gray-500">
          <RiErrorWarningLine />
        </p>
        <p className="text-[10px] text-gray-500">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </div>
  );
};

export default Details;
