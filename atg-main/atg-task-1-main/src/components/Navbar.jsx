import React from "react";
import logo from "../utils/logo.svg";
import { GiPlainSquare } from "react-icons/gi";
import { BsCircleFill } from "react-icons/bs";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import vector from "../utils/Vector.svg";
const Navbar = () => {
  return (
    <div className="  flex items-center justify-end md:justify-between px-[20px] lg:px-[60px] h-[30px] md:h-[72px] py-4">
      <div className="flex md:hidden items-center gap-3 text-[#868E96]">
        <GiPlainSquare size={15} />
        <BsCircleFill size={15} />
        <TbTriangleInvertedFilled size={15} />
      </div>
      <img src={logo} alt="" className="hidden md:block " />
      <div className="hidden md:flex h-[42px]  rounded-3xl bg-[#f2f2f2] items-center w-[310px] px-[8px] py-2">
        <img src={vector} alt="" className="ml-[8px]" />
        <input
          type="text"
          className=" outline-none text-center placeholder-[#5C5C5C] font-medium bg-transparent w-[270px] text-sm"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
      <p className="font-medium hidden md:block">
        Create account.
        <span className=" font-extrabold text-[#2F6CE5]"> It’s free!</span>
      </p>
    </div>
  );
};

export default Navbar;
