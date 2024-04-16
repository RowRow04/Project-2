import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Select, ConfigProvider } from "antd";
import logo from "../assets/logos/logo.png";
import {
  countriesList,
  refregionList,
  refbrgyList,
  refcitymunList,
  refprovinceList,
} from "../constants/dropdowns";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const App = () => {
  const [role, setRole] = useState("");
  const [setDesignation] = useState("");

  const handleRoleChange = (value) => {
    setRole(value);
    setDesignation("");
  };

  // const handleDesignationChange = (value) => {
  //   setDesignation(value);
  // };

  const [isPh, setIsPh] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [brgys, setBrgys] = useState([]);

  const handleChangeRegion = (type) => (value) => {
    // eslint-disable-next-line default-case
    switch (type) {
      case "region":
        // eslint-disable-next-line no-lone-blocks
        {
          setProvinces(
            refprovinceList.filter(({ regCode }) => regCode === value)
          );
          setCities([]);
          setBrgys([]);
          // eslint-disable-next-line react/prop-types
          form.setFieldsValue({
            province: null,
            city: null,
            brgy: null,
          });
        }
        break;
      case "province":
        // eslint-disable-next-line no-lone-blocks
        {
          setCities(
            refcitymunList.filter(({ provCode }) => provCode === value)
          );
          setBrgys([]);
          // eslint-disable-next-line react/prop-types
          form.setFieldsValue({
            city: null,
            brgy: null,
          });
        }
        break;
      case "city": {
        setBrgys(
          refbrgyList.filter(({ citymunCode }) => citymunCode === value)
        );
        // eslint-disable-next-line react/prop-types
        form.setFieldsValue({
          brgy: null,
        });
      }
    }
  };

  const onHandlePh = () => {
    setIsPh((prevState) => !prevState);
  };

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+63">+63</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="flex justify-center">
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
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "+63",
          }}
          style={{
            maxWidth: 600,
            margin: "auto",
            padding: 20,
          }}
          scrollToFirstError
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img src={logo} alt="Logo" style={{ height: "60px" }} />
          </div>

          <Form.Item
            name="FirstName"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please input your First name!",
              },
            ]}
          >
            <Input placeholder="Enter your First Name" />{" "}
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input placeholder="Enter your last name" />{" "}
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="role"
            label="Role"
            rules={[
              {
                required: true,
                message: "Please select your role!",
              },
            ]}
          >
            <Select onChange={handleRoleChange}>
              <Option value="student">Student</Option>
              <Option value="employee">Employee</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="designation"
            label={role === "student" ? "School Name" : "Company Name"}
            rules={[
              {
                required: true,
                message: `Please input your ${
                  role === "student" ? "school" : "company"
                } name!`,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="ageGroup"
            label="Age Group"
            rules={[
              {
                required: true,
                message: "Please select your age group!",
              },
            ]}
          >
            <Select placeholder="Select your age group">
              <Option value="<18">Below 18</Option>
              <Option value="18-24">18 to 24</Option>
              <Option value="25-34">25 to 34</Option>
              <Option value="35-44">35 to 44</Option>
              <Option value="45-54">45 to 54</Option>
              <Option value=">60">Above 60</Option>
            </Select>
          </Form.Item>

          <hr />
          <div className="p-4">
            <Checkbox
              className=" font-bold"
              checked={isPh}
              onClick={onHandlePh}
            >
              Are you living in the Philippines?
            </Checkbox>
          </div>

          {!isPh && (
            <div className="grid grid-cols-6 gap-x-4">
              <div className=" col-span-6 sm:col-span-3">
                <Form.Item
                  label="Country"
                  name="country"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    size="large"
                    placeholder="Select a country"
                    options={countriesList}
                  />
                </Form.Item>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Form.Item
                  label="City"
                  name="city"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please enter your city",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Enter your city" />
                </Form.Item>
              </div>
            </div>
          )}

          {isPh && (
            <div className="grid grid-cols-6 gap-x-4">
              <div className=" col-span-6 sm:col-span-3">
                <Form.Item
                  label="Region"
                  name="region"
                  rules={[{ required: true }]}
                >
                  <Select
                    size="large"
                    placeholder="Select a region"
                    options={refregionList}
                    onChange={handleChangeRegion("region")}
                  />
                </Form.Item>
              </div>
              <div className=" col-span-6 sm:col-span-3">
                <Form.Item
                  label="Province"
                  name="province"
                  rules={[{ required: true }]}
                >
                  <Select
                    size="large"
                    placeholder="Select a province"
                    options={provinces}
                    onChange={handleChangeRegion("province")}
                  />
                </Form.Item>
              </div>
              <div className=" col-span-6 sm:col-span-3">
                <Form.Item
                  label="City"
                  name="city"
                  rules={[{ required: true }]}
                >
                  <Select
                    size="large"
                    placeholder="Select a city"
                    options={cities}
                    onChange={handleChangeRegion("city")}
                  />
                </Form.Item>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Form.Item
                  label="Barangay"
                  name="brgy"
                  rules={[{ required: true }]}
                >
                  <Select
                    size="large"
                    placeholder="Select a brgy"
                    options={brgys}
                  />
                </Form.Item>
              </div>

              <div className="col-span-6 sm:col-span">
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[
                    {
                      required: true,
                      message: "Please input your address!",
                    },
                  ]}
                >
                  <Input className="w-full" placeholder="Enter your address" />
                </Form.Item>
              </div>
            </div>
          )}

          <div className="flex justify-center">
            <Form.Item style={{ marginLeft: "60px" }}>
              <Button type="primary" htmlType="submit">
                Update Profile
              </Button>
            </Form.Item>
          </div>
        </Form>
      </ConfigProvider>
    </div>
  );
};
export default App;
