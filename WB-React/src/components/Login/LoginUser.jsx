import { Button, Form, Input, Modal, ConfigProvider } from "antd";
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLoginApi } from "../../services/requests/user/useLoginAuth";
// import { login } from "../../store/slices/visitor/authSlice";

const LoginUser = () => {
  // const dispatch = useDispatch();
  const { isLoading, mutate } = useLoginApi();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    // dispatch(login(values));
    mutate(values);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#f4811f",
          colorSuccess: "#f4811f",
          fontFamily: "Poppins, sans-serif",
          colorBgBase: "#fff",
        },
      }}
    >
      <Form
        className=" border-t-2 p-7 flex flex-wrap transition-all mt-7 shadow-2xl mb-10"
        name="basic"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
        initialValues={{
          email: "chrismhoi17@gmail.com",
          password: "Pass@1",
        }}
      >
        <Form.Item
          className="w-full"
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: false,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input size="large" placeholder="Email" className=" py-3" />
        </Form.Item>
        <Form.Item
          className=" w-full"
          label="Password"
          name="password"
          rules={[
            {
              required: false,
              message: "Please input your password!",
            },
          ]}
          initialValue={""}
        >
          <Input.Password
            size="large"
            placeholder="Password"
            className=" py-3"
          />
        </Form.Item>

        {/* <Form.Item name="remember" valuePropName="checked"></Form.Item> */}
        <Form.Item className="flex flex-row-reverse">
          <Link
            className=" px-3 text-[#686868] hover:text-[#0a58ca] md:text-[14px] text-[13px]"
            onClick={showModal}
          >
            Forgot Password
          </Link>
          <Modal
            title="Forgot Password"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            width={500}
            style={{
              textAlign: "center",
            }}
            bodyStyle={{
              height: 50,
            }}
            footer={[
              <div key="footer" className=" flex justify-center gap-4 mb-2">
                <button
                  className=" bg-gray-400 text-white hover:text-white hover:bg-gray-500 px-9 py-3 rounded-md font-semibold "
                  key="back"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className=" bg-[#df7e1b] text-white hover:text-white hover:bg-[#c86718] px-9 py-3 rounded-md font-semibold"
                  key="submit"
                  onClick={handleOk}
                >
                  Submit
                </button>
              </div>,
            ]}
          >
            <Input className=" p-3" placeholder="Enter your email address" />
          </Modal>
        </Form.Item>
        <div className=" w-full">
          <Form.Item className="">
            <Button
              type="primary"
              size="large"
              className=" w-full bg-[#df7e1b] hover:bg-[#c86718]"
              htmlType="submit"
            >
              LOGIN
            </Button>
          </Form.Item>
          <Form.Item className=" flex justify-center mt-4 ">
            <p className=" md:text-[16px] text-[14px]">
              Dont have an account?
              <a
                className="text-[#df7e1b] hover:text-[#c86718]"
                href="/registration"
              >
                {" "}
                Register Here !
              </a>
            </p>
          </Form.Item>
        </div>
      </Form>
    </ConfigProvider>
  );
};

export default LoginUser;
