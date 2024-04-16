import {
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const MenuItemsLogin = ({ active }) => {
  const refresh = () => {
    window.location.reload(true);
  };
  return (
    <ul
      className={
        active
          ? " absolute top-10 left-0 right-0 flex-col flex items-center uppercase bg-white/90 gap-6 justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <li className="">
        <a
          className=" w-full py-2 px-40 rounded-full bg-transparent hover:bg-[#df7e1b] hover:bg-opacity-50 text-gray-600 flex font-bold"
          href="https://worldbexevents.com/"
        >
          <HomeOutlined className=" mr-1 mt-1" />
          Home
        </a>
      </li>
      <li>
        <Link
          className=" py-2 px-40 rounded-full  bg-[#df7e1b] text-white h-auto flex font-bold"
          to="/login"
          onClick={refresh}
        >
          <LoginOutlined className=" mr-1 mt-1" />
          Login
        </Link>
      </li>
      <li>
        <Link
          className=" py-2 px-40 rounded-full bg-transparent hover:bg-[#df7e1b] hover:bg-opacity-50 text-gray-600 flex font-bold"
          to="/registration"
        >
          <UserAddOutlined className=" mr-1 mt-1" />
          SignUp
        </Link>
      </li>
    </ul>
  );
};

export default MenuItemsLogin;
