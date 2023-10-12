import React from "react";
import { AiOutlineUsergroupAdd, AiFillCaretDown } from "react-icons/ai";
const Categories = () => {
  return (
    <div className=" md:border-b-2 border-gray-300 pb-[12px] mt-[30px] flex items-center lg:px-0 px-[30px] md:px-[10px] justify-between">
      <ul className="flex gap-[28px] font-semibold items-center text-[#8a8a8a]">
        <li className="text-black ">
          <a href="#" className="md:border-b-2 border-gray-600 pb-[20px]">
            All Posts (32)
          </a>
        </li>
        <li className="hidden md:block">
          <a href="#">Article</a>
        </li>
        <li className="hidden md:block">
          <a href="#">Event</a>
        </li>
        <li className="hidden md:block">
          <a href="#">Education</a>
        </li>
        <li className="hidden md:block">
          <a href="#">Job</a>
        </li>
      </ul>
      <div className="flex md:gap-[16px]  justify-between items-center">
        <button className=" hidden h-[36px] md:flex items-center gap-1 px-[12px] font-semibold text-black bg-[#EDEEF0] rounded-lg py-[6px]">
          Write a Post <AiFillCaretDown size={18} />
        </button>
        <button className=" md:hidden h-[36px] flex items-center gap-1 px-[12px] font-semibold text-black bg-[#EDEEF0] rounded-lg py-[6px]">
          Filters
          <AiFillCaretDown size={18} />
        </button>

        <button className=" hidden md:flex h-[36px] items-center gap-1 px-[12px] font-semibold text-white rounded-lg py-[6px] bg-[#2F6CE5]">
          <AiOutlineUsergroupAdd size={25} /> Join Group
        </button>
      </div>
    </div>
  );
};

export default Categories;
