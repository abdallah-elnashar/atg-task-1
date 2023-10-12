import React from "react";
import hero from "../utils/hero.png";
const Hero = () => {
  return (
    <div className="relative">
      <div className=" w-full h-full background absolute   " />
      <div className=" absolute top-[65%] left-[15%] text-white">
        <h2 className="text-[17px] md:text-[36px] font-bold">
          Computer Engineering
        </h2>
        <p className=" text-[12px] md:text-[18px]">
          142,765 Computer Engineers follow this
        </p>
      </div>
      <div className=" absolute top-[5%] right-[5%] block md:hidden border-2 rounded-md text-white border-white px-2 py-1 text-[12px] md:text-[18px]">
        Join Group
      </div>
      <img
        src={hero}
        alt="hero"
        className=" w-full h-[236px]   md:h-[440px] object-cover"
      />
    </div>
  );
};

export default Hero;
