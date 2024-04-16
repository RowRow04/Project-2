import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, ConfigProvider, Popover, Space } from "antd";
import React from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { logout } from "../../../../../store/slices/visitor/authSlice";
import { useUserAuthStore } from "../../../../../store/user/useAuth";

const Content = () => {
  // const dispatch = useDispatch();
  const { reset } = useUserAuthStore();
  const handleLogout = () => {
    // dispatch(logout());
    reset();
  };

  return (
    <Space
      size="middle"
      direction="vertical"
      style={{
        display: "flex",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <Link to="/profile" className="flex justify-center items-center gap-x-2">
        <UserOutlined /> Profile
      </Link>

      <Link
        onClick={handleLogout}
        className="flex justify-center items-center gap-x-2"
      >
        <LogoutOutlined /> Logout
      </Link>
    </Space>
  );
};

const AvatarNav = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorLinkHover: "#F4811F",
        },
      }}
    >
      <div>
        <Popover
          content={<Content />}
          trigger="click"
          placement="bottomRight"
          className=" cursor-pointer"
        >
          <Avatar size="large" icon={<UserOutlined />} />
        </Popover>
      </div>
    </ConfigProvider>
  );
};

export default AvatarNav;
