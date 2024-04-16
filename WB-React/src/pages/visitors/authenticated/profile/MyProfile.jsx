import { LeftOutlined } from "@ant-design/icons";
import { ConfigProvider, Layout } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../../../assets/logos";
import AvatarNav from "../layout/Navbar/AvatarNav";
import ProfileTemplate from "./ProfileTemplate";
import { useUserProfile } from "../../../../services/requests/user/profile/useUserProfile";

const MyProfile = () => {
  const { Header, Content } = Layout;
  const navigate = useNavigate();
  const { data: userData, isLoading } = useUserProfile();

  if (isLoading)
    return (
      <>
        <h1>Loading....</h1>
      </>
    );

  const profile = [
    {
      id: 15,
      userId: "0328e505-c52d-11ec-9461-0ebf1fc6bf7e",
      gId: null,
      firstName: "CHRISTOPHER",
      lastName: "DUNGARAN",
      mobileNumber: "639158007411",
      email: "chrismhoi17@gmail.com",
      position: "PROGRAMMER",
      company: "DGSI",
      ageGroup: "below 18",
      address: "123",
      country: "",
      region: "04",
      province: "0458",
      city: "045805",
      barangay: null,
      password: "$2a$10$oIDxlTMLPZCl3Vkm.qNk7.nmWyU2RlZRkUe4/XVrQsPNWClVj4TlW",
      isDeleted: 0,
      isAvailPromo: "0",
      createdAt: "2022-04-26 14:49:25",
      updatedAt: "2022-12-16 14:01:00",
    },
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
        <Layout className=" h-screen ">
          <Header
            className=" sm:block hidden"
            style={{
              background: "#F4811F",
              padding: 0,
            }}
          >
            <div className=" flex justify-between items-center md:ml-5 sm:ml-2 ml-3 md:mr-7 sm:mr-3 mr-4">
              <div className=" flex justify-center items-center lg:gap-x-28 gap-x-4">
                <LeftOutlined
                  className=" cursor-pointer text-white scale-125"
                  onClick={() => navigate(-1)}
                />
                <img
                  className=" w-[320px] sm:block hidden"
                  src={logo}
                  alt="/"
                />
              </div>
              <div className=" flex justify-center items-center md:gap-x-5 sm:gap-x-1 gap-x-5">
                <label>
                  <Link
                    to="/profile"
                    className=" text-white hover:underline hover:text-white"
                  >
                    {userData[0].firstName + " " + userData[0].lastName}
                  </Link>
                </label>

                <AvatarNav />
              </div>
            </div>
          </Header>
          <Content>
            {<ProfileTemplate key={userData[0].userId} profile={userData[0]} />}
          </Content>
        </Layout>
      </ConfigProvider>
    </>
  );
};

export default MyProfile;
