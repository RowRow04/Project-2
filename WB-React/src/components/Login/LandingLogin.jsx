import React from "react";
import {
  org1,
  org10,
  org11,
  org12,
  org13,
  org14,
  org2,
  org3,
  org4,
  org5,
  org6,
  org7,
  org8,
  org9,
} from "../../assets/organizers";

const LandingLogin = () => {
  return (
    <div className=" w-[80%] md:w-[75%] lg:w-[55%] flex flex-col justify-center content-center mx-auto">
      <div className=" ">
        <h1 className=" text-center font-bold text-sm text-[#686868] mb-2">
          Organizers of:
        </h1>
      </div>

      <div className=" flex justify-center flex-wrap lg: gap-5 ">
        <img src={org1} alt="" className=" w-[78px] h-[78px]   " />
        <img src={org2} alt="" className=" w-[78px] h-[78px]   " />

        <img src={org3} alt="" className=" w-[78px] h-[78px]   " />
        <img src={org4} alt="" className=" w-[78px] h-[78px]   " />

        <img src={org5} alt="" className=" w-[78px] h-[78px]   " />
        <img src={org6} alt="" className=" w-[78px] h-[78px]   " />

        <img src={org7} alt="" className=" w-[78px] h-[78px]   " />
        <img src={org8} alt="" className=" w-[78px] h-[78px]   " />

        <img src={org9} alt="" className=" w-[78px] h-[78px]   " />
        <img src={org10} alt="" className=" w-[78px] h-[78px]   " />

        <img src={org11} alt="" className=" w-[78px] h-[78px]   " />
        <img src={org12} alt="" className=" w-[78px] h-[78px]   " />

        <img src={org13} alt="" className=" w-[78px] h-[78px]   " />
        <img src={org14} alt="" className=" w-[78px] h-[78px]   " />
      </div>
    </div>
  );
};

export default LandingLogin;
