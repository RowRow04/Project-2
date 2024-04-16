import { MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItemsLogin from "./MenuItemsLogin";

const NavLogin = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="">
      <div className="absolute right-6 md:hidden top-3 scale-125">
        <MenuOutlined
          onClick={showMenu}
          className="scale-125 cursor-pointer text-[#df7e1b] hover:text-[#b97838] "
        />
      </div>
      <div className=" hidden md:flex justify-end gap-24 p-10 text-xl mr-10 flex-wrap font-semibold text-[#565656]">
        <div>
          <Link
            className=" hover:text-[#F4811F] text-black no-underline"
            href="https://worldbexevents.com/"
          >
            About WSI
          </Link>
        </div>
        <div>
          <Link
            className=" text-[#F4811F] underline underline-offset-8"
            to="/login"
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            className=" hover:text-[#F4811F] text-black no-underline"
            to="/registration"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <MenuItemsLogin showMenu={showMenu} active={active} />
    </div>
  );
};

export default NavLogin;
