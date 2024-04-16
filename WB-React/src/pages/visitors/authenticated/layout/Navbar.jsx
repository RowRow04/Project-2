import {
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Layout, Menu } from "antd";
import Input from "antd/es/input/Input";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo, worldbex } from "../../../../assets/logos";
import AvatarNav from "../layout/Navbar/AvatarNav";

const { Header } = Layout;

const Navbar = ({ collapsed, setCollapsed, userData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSearch = (value) => {
    console.log(value);
  };

  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname.split("/").join(" ").trim().split(" ")[0]);
  }, [location]);

  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };

  const items = [
    getItem(<Link to="/events">Events</Link>, "events", <CalendarOutlined />),
    getItem(
      <Link to="/tickets">Tickets</Link>,
      "tickets",
      <SnippetsOutlined />
    ),
  ];

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: "white",
            colorPrimary: " #df7e1b",
            colorBgTextHover: "#df7e1b",
          },
        }}
      >
        <Header
          className=" md:block hidden sticky-top"
          style={{
            background: "#F4811F",
            padding: 0,
          }}
        >
          <div className=" flex items-center justify-between mx-5 w-auto flex-wrap sm:justify-between gap-x-1">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger scale-150 text-white",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <img
              className=" w-[255px] xl:w-[320px] hidden xl:block"
              src={logo}
              alt="/"
            />

            <Input.Search
              className=" min-w-[50px] max-w-[400px]  p-0 m-0 bg-white/30 text-white "
              placeholder="Search..."
              allowClear
              value={searchTerm}
              onChange={handleChange}
              onSearch={onSearch}
            />

            <div className=" flex justify-center items-center gap-x-5">
              <label className={`${collapsed ? " block" : "lg:block hidden"}`}>
                <Link
                  to="/profile"
                  className=" text-white hover:underline hover:text-white"
                >
                  {userData.firstName + " " + userData.lastName}
                </Link>
              </label>

              <AvatarNav />
            </div>
          </div>
        </Header>

        {/* header2 when md breakpoint */}

        <Header
          className=" md:hidden block"
          style={{
            background: "white",
            padding: 0,
          }}
        >
          <div className=" flex items-center justify-between mx-5 w-auto flex-nowrap sm:justify-between gap-x-3">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger scale-150 text-black sm:block hidden",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <img
              className=" w-[255px] xl:w-[320px] hidden xl:block"
              src={logo}
              alt="/"
            />

            <Input.Search
              className=" min-w-[50px] sm:w-[250px] md:w-[300px] p-0 m-0 bg-white/30 text-black xl:w-[400px] sm:block hidden"
              placeholder="Search..."
              allowClear
              value={searchTerm}
              onChange={handleChange}
              onSearch={onSearch}
            />
            <div className=" flex justify-center items-center gap-x-3">
              <img
                src={worldbex}
                alt="/"
                className=" w-[40px] h-[40px] sm:hidden block"
              />
            </div>

            <div className=" flex justify-center items-center sm:gap-x-5 gap-x-3">
              <label
                className={`${
                  collapsed ? "sm:block hidden font-bold" : "hidden"
                }`}
              >
                <Link
                  to="/profile"
                  className=" text-black hover:underline hover:text-black"
                >
                  {userData.firstName + " " + userData.lastName}
                </Link>
              </label>
              <Link
                to="/profile"
                className=" text-black hover:underline hover:text-black font-bold sm:hidden block"
              >
                {userData.firstName + " " + userData.lastName}
              </Link>
              <AvatarNav />
            </div>
          </div>
        </Header>

        {/* Menu Navbar when sm  */}
        <div className=" sm:hidden block">
          <Menu
            mode="horizontal"
            items={items}
            defaultSelectedKeys={`${selectedKey}`}
            selectedKeys={[selectedKey]}
          />
        </div>
        <div className=" sm:hidden block mt-4 mx-4 mb-0">
          <Input.Search
            className=" min-w-[50px]  p-0 m-0 bg-white/30 text-black xl:w-[400px]"
            placeholder="Search..."
            allowClear
            value={searchTerm}
            onChange={handleChange}
            onSearch={onSearch}
          />
        </div>
      </ConfigProvider>
    </>
  );
};

export default Navbar;
