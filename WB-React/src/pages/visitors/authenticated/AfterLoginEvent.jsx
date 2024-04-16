import { Layout } from "antd";
import { useUserProfile } from "../../../services/requests/user/profile/useUserProfile";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Foot from "./layout/Foot";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

const { Content } = Layout;

const AfterLoginEvent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { data, isLoading } = useUserProfile();

  if (isLoading)
    return (
      <>
        <h1>Loading....</h1>
      </>
    );

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Navbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          userData={data[0]}
        />
        {/* <Navbar1 collapsed={collapsed} setCollapsed={setCollapsed} /> */}
        <Content>
          <Outlet />
        </Content>
        <Foot />
      </Layout>
    </Layout>
  );
};

export default AfterLoginEvent;
