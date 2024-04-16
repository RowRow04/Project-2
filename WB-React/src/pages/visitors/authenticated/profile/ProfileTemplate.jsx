import { LeftOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Modal, message } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { worldbex } from "../../../../assets/logos";
import { useUpdatePassword } from "../../../../services/requests/user/profile/useUpdatePassword";

const ProfileTemplate = ({ key, profile }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassowrd, setNewPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate } = useUpdatePassword();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (newPassowrd !== confirmPassword) {
      message.warning("New Password and Confirm Password not match.");
      return;
    }
    mutate({ oldPassword: oldPassword, password: newPassowrd });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <LeftOutlined
        className="cursor-pointer absolute top-8 left-8 scale-125 sm:hidden block"
        onClick={() => navigate(-1)}
      />
      <div className="sm:m-5 m-0 flex  justify-center items-center">
        <div className="md:bg-white flex flex-col justify-center items-center  max-w-[530px] w-full shadow-2xl mb-5">
          <img
            src={worldbex}
            alt="/"
            className="w-[80px] h-[80px] mt-16 mb-2"
          />
          <div className="flex justify-center items-center flex-col ">
            <h1 className="text-xl font-semibold mb-0">
              {profile.firstName + " " + profile.lastName}
            </h1>
            <p className="text-[#7B7B7B] text-[15px] mb-0">{profile.email}</p>
          </div>
          <p
            className="gap-x-2 flex text-[#F5821F] cursor-pointer mb-2"
            onClick={showModal}
          >
            <LockOutlined />
            Change Password
          </p>
          <div className="grid grid-cols-6  ">
            <div className="sm:col-span-2 col-span-6 sm:ml-16 ml-10">
              <p>Mobile Number:</p>
            </div>
            <div className=" sm:col-span-4 col-span-6 text-[#747474] sm:ml-0 ml-10 sm:mb-0 mb-5">
              <p>{profile.mobileNumber}</p>
            </div>
            <div className=" sm:col-span-2 col-span-6 sm:ml-16 ml-10">
              <p>Company:</p>
            </div>
            <div className=" sm:col-span-4 col-span-6 text-[#747474] sm:ml-0 ml-10 sm:mb-0 mb-5">
              <p>{profile.company}</p>
            </div>
            <div className=" sm:col-span-2 col-span-6 sm:ml-16 ml-10">
              <p>Designation:</p>
            </div>
            <div className=" sm:col-span-4 col-span-6 text-[#747474] sm:ml-0 ml-10 sm:mb-0 mb-5">
              <p>{profile.position}</p>
            </div>
            <div className=" sm:col-span-2 col-span-6 sm:ml-16 ml-10">
              <p>Age Group:</p>
            </div>
            <div className=" sm:col-span-4 col-span-6 text-[#747474] sm:ml-0 ml-10 sm:mb-0 mb-5">
              <p>{profile.ageGroup}</p>
            </div>
            <div className=" sm:col-span-2 col-span-6 sm:ml-16 ml-10">
              <p>Address:</p>
            </div>
            <div className=" sm:col-span-4 col-span-6 text-[#747474] sm:ml-0 ml-10 sm:mb-0 mb-5">
              <p>
                {profile.address +
                  ", " +
                  profile.province +
                  ", " +
                  profile.city +
                  ", " +
                  profile.region}
              </p>
              {/* <p>123, CAINTA, RIZAL, REGION IV-A (CALABARZON)</p> */}
            </div>
            <div className="col-span-6 flex justify-center mb-14 mt-8">
              <button
                className="hover:border-[#F4811F] border-2 py-4 sm:px-32 px-16 hover:text-[#F4811F]"
                onClick={showModal}
              >
                EDIT PROFILE
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={<h1 className="text-2xl mb-10">Change Password</h1>}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        width={500}
        style={{
          textAlign: "center",
          textSize: "20px",
        }}
        bodyStyle={{
          textAlign: "start",
        }}
        footer={[
          <div key="footer" className="flex justify-center">
            <button
              className="bg-gray-400 text-white hover:text-white hover:bg-gray-500 px-9 py-3 rounded-md font-semibold"
              style={{ marginRight: "30px" }}
              key="back"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="bg-[#df7e1b] text-white hover:text-white hover:bg-[#c86718] px-9 py-3 rounded-md font-semibold"
              key="submit"
              onClick={handleOk}
            >
              Submit
            </button>
          </div>,
        ]}
      >
        <label className="text-lg">Current Password</label>
        <Input.Password
          name="oldPassword"
          className="p-3 mb-4"
          placeholder="Current Password"
          onChange={(e) => setOldPassword(e.target.value)}
          value={oldPassword}
        ></Input.Password>
        <label className="text-lg">New Password</label>
        <Input.Password
          name="newPassword"
          className="p-3 mb-4"
          placeholder="New Password"
          onChange={(e) => setNewPassowrd(e.target.value)}
          value={newPassowrd}
        ></Input.Password>
        <label className="text-lg">Confirm Password</label>
        <Input.Password
          name="confirmPassword"
          className="p-3 mb-4"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        ></Input.Password>
      </Modal>
    </div>
  );
};

export default ProfileTemplate;
