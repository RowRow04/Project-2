import React from "react";
import { bannerlogo, bannerbg } from "../../assets/banner";
import { hdesign, logo, vdesign } from "../../assets/logos";
import NavReg from "./NavReg";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className=" grid grid-cols-7 grid-rows-1 ">
      <div className=" col-span-2 bg-wbex-long min-h-screen h-full lg:grid grid-rows-5 hidden relative">
        <div
          className="bg-cover bg-fixed bg-center w-full h-full absolute top-0 left-0 opacity-30"
          style={{ backgroundImage: `url(${bannerbg})` }}
        ></div>
        <div className=" row-span-1 flex justify-center items-start opacity-90">
          <a href="/">
            <img className=" mt-10 h-[37] w-[355px]" src={logo} alt="/" />
          </a>
        </div>
        <div className=" row-span-3 flex justify-content items-center">
          <img className=" w-[65%] mx-auto" src={bannerlogo} alt="/" />
        </div>
        <div className=" flex flex-col items-center justify-center text-center text-[#B95F03] row-span-1 text-md font-bold">
          <div className=" mt-24">
            <p>THE LEADING EXHIBITION AND EVENTS MANAGEMENT</p>
            <p>COMPANY IN THE PHILIPPINES</p>
            <p>WITH OVER 25 YEARS OF EXCELLENCE</p>
          </div>
        </div>
      </div>
      <div className=" col-span-7 lg:col-span-5 relative">
        <img className=" hidden xl:block absolute" src={hdesign} alt="/" />
        <img
          className=" hidden xl:block absolute bottom-0 right-0"
          src={vdesign}
          alt="/"
        />
        <NavReg />
        <div className=" w-[90%] mx-auto mt-20">
          <div className=" mb-6 font-bold md:hidden block">
            <div className=" pt-14 text-4xl ">
              <p className=""> Let's sign you Up.</p>
            </div>
          </div>
          <div className=" uppercase text-2xl sm:text-4xl md:text-5xl font-bold text-[#F4811F]">
            <p>Create your world bex</p>
            <p>Services International Account</p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
