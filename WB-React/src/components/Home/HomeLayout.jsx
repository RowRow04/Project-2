import React from "react";
import { homebanner } from "../../assets/banner";
import { v2design, vdesign } from "../../assets/logos";
import LandingHome from "./LandingHome";
import NavHome from "./NavHome";
import Welcome from "./Welcome";

const HomeLayout = () => {
  return (
    <div className=" w-full h-full relative">
      <div className=" grid grid-cols-4">
        <img className="absolute lg:block hidden " src={v2design} alt="" />
        <img
          className=" 2xl:fixed absolute bottom-0 right-0 lg:block hidden "
          src={vdesign}
          alt=""
        />
        <div className=" col-span-4">
          <NavHome />
        </div>
        <div className=" lg:col-span-2 col-span-4 ">
          <div className="   lg:pl-[140px] md:pl-[60px] pl-0 lg:mt-40 mt-5 md:w-full w-[90%] mx-auto">
            <Welcome />
            <LandingHome />
          </div>
        </div>
        <div className=" lg:col-span-2 col-span-4 md:block hidden">
          <div className=" w-full lg:block hidden">
            <img
              // className=" absolute bottom-14 2xl:right-40 xl:right-5 right-0 2xl:scale-100 xl:scale-75 scale-50"
              className=" xl:pt-20 lg:pr-40 pt-40 pr-20"
              src={homebanner}
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
