import {
  Button,
  Checkbox,
  ConfigProvider,
  Divider,
  Form,
  Input,
  Radio,
  Select,
  Space,
} from "antd";

import React, { useEffect, useState } from "react";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "react-phone-number-input/style.css";
// import {
//   barangays,
//   cities,
//   provinces,
//   regions,
// } from "select-philippines-address";
import {
  countriesList,
  refregionList,
  refbrgyList,
  refcitymunList,
  refprovinceList,
} from "../../constants/dropdowns";
import { useSignup } from "../../services/requests/user/useSignup";

const SignUpForm = () => {
  const [form] = Form.useForm();
  const [isStudent, setIsStudent] = useState(false);
  const [isNotCheck, setIsNotCheck] = useState(false);

  const [privacyCheck, setPrivacy] = useState(false);
  const [updateCheck, setUpdate] = useState(false);
  // const [isCheck, setIsCheck] = useState(true);
  // const [phShow, setPhShow] = useState(true);
  // const [countryHide, setCountryHide] = useState(false);

  // const [values, setValues] = useState();

  // const [regionData, setRegion] = useState([]);
  // const [provinceData, setProvince] = useState([]);
  // const [cityData, setCity] = useState([]);
  // const [barangayData, setBarangay] = useState([]);

  // const [country, setCountry] = useState("");
  // const [regionNational, setRegionNational] = useState("");
  // const region = () => {
  //   regions().then((response) => {
  //     setRegion(
  //       response.sort((a, b) => a.region_name.localeCompare(b.region_name))
  //     );
  //   });
  // };

  // const province = (e) => {
  //   provinces(e.target.value).then((response) => {
  //     setProvince(
  //       response.sort((a, b) => a.province_name.localeCompare(b.province_name))
  //     );
  //     setCity([]);
  //     setBarangay([]);
  //   });
  // };

  // const city = (e) => {
  //   cities(e.target.value).then((response) => {
  //     setCity(response.sort((a, b) => a.city_name.localeCompare(b.city_name)));
  //   });
  // };

  // const barangay = (e) => {
  //   barangays(e.target.value).then((response) => {
  //     setBarangay(
  //       response.sort((a, b) => a.brgy_name.localeCompare(b.brgy_name))
  //     );
  //   });
  // };

  // const brgy = (e) => {};

  // useEffect(() => {
  //   region();
  // }, []);
  // regions().then((region) => console.log(region));
  // regionByCode('01').then((region) => console.log(region.region_name));

  // const onChecked = () => {
  //   setIsCheck((current) => !current);
  //   setIsNotCheck((current) => !current);
  // };

  // const onHide = () => {
  //   setPhShow((current) => !current);
  //   setCountryHide((current) => !current);
  // };

  const [value, setValue] = useState(1);
  const onChange = (value) => {
    setValue(value);
  };
  // const countryChange = (val) => {
  //   setCountry(val);
  // };
  // const regionChange = (val) => {
  //   setRegionNational(val);
  // };

  const { mutate } = useSignup();

  const onFinish = (values) => {
    // console.log("VALUES", values);
    mutate(values);
  };

  const handleChangeStudent = () => {
    setIsStudent((prevstate) => !prevstate);
  };

  // ADDRESS
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

  useEffect(() => {
    if (isStudent) {
      form.setFieldValue("position", "STUDENT");
    } else {
      form.setFieldValue("position", "");
    }
  }, [form, isStudent]);

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
      <div className="">
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className=" w-full mx-auto border-t-2 mt-4  px-5 shadow-2xl mb-10 p-4"
        >
          <div className="grid grid-cols-6 gap-x-4">
            <div className="col-span-6 sm:col-span-3 ">
              <Form.Item
                label="First Name"
                name="firstName"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please enter First name!",
                  },
                ]}
              >
                <Input size="large" placeholder="First name" />
              </Form.Item>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <Form.Item
                label="Last Name"
                name="lastName"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please enter Last name!",
                  },
                ]}
              >
                <Input size="large" placeholder="Last name" />
              </Form.Item>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <Form.Item
                label="Mobile Number"
                name="mobileNumber"
                rules={[
                  {
                    required: true,
                    message: "This field is required!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="9 digit number"
                  prefix="639"
                  type="numeric"
                  style={{ width: "100%" }}
                  maxLength={9}
                />
              </Form.Item>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <Form.Item
                label="Email Address"
                name="email"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input your E-mail address!",
                  },
                ]}
              >
                <Input size="large" placeholder="Email" />
              </Form.Item>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <Form.Item
                label={
                  <div>
                    Designation{" "}
                    <Checkbox
                      checked={isStudent}
                      onChange={handleChangeStudent}
                    >
                      Student?
                    </Checkbox>{" "}
                  </div>
                }
                name={"position"}
                hasFeedback
                hidden={isNotCheck}
                rules={[
                  {
                    required: true,
                    message: "Enter your Designation!",
                  },
                ]}
              >
                <Input
                  disabled={isStudent}
                  size="large"
                  className=" w-full py-2"
                  placeholder="Designation"
                  hidden={isNotCheck}
                />
              </Form.Item>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <Form.Item
                label={isStudent ? "School Name" : "Company"}
                name="company"
                hidden={isNotCheck}
                rules={[
                  {
                    required: true,
                    message: `Please enter ${
                      isStudent ? "School" : "Company"
                    } name!`,
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder={isStudent ? "School" : "Company"}
                  hidden={isNotCheck}
                />
              </Form.Item>
            </div>

            <div className="col-span-3 sm:col-span-3">
              <Form.Item
                label="Age"
                name="ageGroup"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please choose your age!",
                  },
                ]}
              >
                <Select
                  onChange={onChange}
                  value={value}
                  placeholder="Select your age"
                >
                  <Select.Option value="1">below 18</Select.Option>
                  <Select.Option value="2">18 to 24</Select.Option>
                  <Select.Option value="3">25 to 34</Select.Option>
                  <Select.Option value="4">35 to 44</Select.Option>
                  <Select.Option value="5">45 to 54</Select.Option>
                  <Select.Option value="6">55 to 60</Select.Option>
                  <Select.Option value="7">60 and above</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <Divider className=" my-2" />

          {/* ADDRESS */}
          <div className="grid grid-cols-6 gap-x-4 mb-4">
            <div className=" col-span-6 sm:col-span-6">
              <Checkbox
                className=" font-bold"
                checked={isPh}
                onClick={onHandlePh}
              >
                Are you living in the Philippines?
              </Checkbox>
            </div>

            {/* <div className="col-span-6 sm:col-span-3" hidden={countryHide}>
            <Form.Item
              className=""
              label="Country"
              name="country"
              rules={[
                {
                  required: true,
                  message: "Select your Country!",
                },
              ]}
            >
              <CountryDropdown
                className=" p-3 w-full border-2 rounded-md"
                value={country}
                onChange={countryChange}
              />
            </Form.Item>
          </div>

          <div className="col-span-6 sm:col-span-3" hidden={countryHide}>
            <Form.Item
              className=""
              label="Region"
              name="region1"
              rules={[
                {
                  required: true,
                  message: "Select your region!",
                },
              ]}
            >
              <RegionDropdown
                className=" py-3 w-full border-2 rounded-md"
                country={country}
                value={regionNational}
                onChange={regionChange}
              />
            </Form.Item>
          </div>

          <div className="col-span-6 sm:col-span-3" hidden={phShow}>
            <Form.Item
              className=" mb-1"
              label="Region"
              name="region"
              rules={[
                {
                  required: true,
                  message: "Enter your Region!!",
                },
              ]}
            >
              <select
                className=" w-full py-3 px-5 border-2 rounded-md"
                onChange={province}
                onSelect={region}
              >
                <option disabled>Select Region</option>
                {regionData &&
                  regionData.length > 0 &&
                  regionData.map((item) => (
                    <option key={item.region_code} value={item.region_code}>
                      {item.region_name}
                    </option>
                  ))}
              </select>
            </Form.Item>
          </div>

          <div className="col-span-6 sm:col-span-3" hidden={phShow}>
            <Form.Item
              className=" mb-1"
              label="Province"
              name="province"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Select your Province!",
                },
              ]}
            >
              <select
                className="w-full py-3 px-5 border-2 rounded-md"
                onChange={city}
              >
                <option disabled>Select Province</option>
                {provinceData &&
                  provinceData.length > 0 &&
                  provinceData.map((item) => (
                    <option key={item.province_code} value={item.province_code}>
                      {item.province_name}
                    </option>
                  ))}
              </select>
            </Form.Item>
          </div>

          <div className="col-span-6 sm:col-span-3" hidden={phShow}>
            <Form.Item
              className=" mb-1"
              label="City"
              name="city"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Select your City!",
                },
              ]}
            >
              <select
                className="w-full py-3 px-5 border-2 rounded-md"
                onChange={barangay}
              >
                <option disabled>Select City</option>
                {cityData &&
                  cityData.length > 0 &&
                  cityData.map((item) => (
                    <option key={item.city_code} value={item.city_code}>
                      {item.city_name}
                    </option>
                  ))}
              </select>
            </Form.Item>
          </div>

          <div className="col-span-6 sm:col-span-3 " hidden={phShow}>
            <Form.Item
              className=" mb-1"
              label="Barangay"
              name="barangay"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Select your barangay!",
                },
              ]}
            >
              <select
                className=" w-full py-3 px-5 border-2 rounded-md"
                onChange={brgy}
              >
                <option disabled>Select Barangay</option>
                {barangayData &&
                  barangayData.length > 0 &&
                  barangayData.map((item) => (
                    <option key={item.brgy_code} value={item.brgy_code}>
                      {item.brgy_name}
                    </option>
                  ))}
              </select>
            </Form.Item>
          </div>

          <div className="col-span-6 sm:col-span-6 " hidden={phShow}>
            <Form.Item
              className=" mb-1"
              label="Address"
              name="address"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Enter your Address!",
                },
              ]}
            >
              <Input
                size="large"
                className=" w-full py-2"
                placeholder="Address"
              />
            </Form.Item>
          </div> */}
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
              <div className=" col-span-6 sm:col-span-3">
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
            </div>
          )}

          <Divider className=" my-2" />

          {/* PASSWORD */}
          <div className="grid grid-cols-6 gap-x-4">
            <div className="col-span-6 md:col-span-3">
              <Form.Item
                className=""
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  autoComplete="off"
                  placeholder="Password"
                />
              </Form.Item>
            </div>
            <div className="col-span-6 md:col-span-3 ">
              <Form.Item
                className=""
                label="Confrim Password"
                name="confirm-password"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your Password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  size="large"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
              </Form.Item>
            </div>
          </div>

          {/* CONCENT */}
          <div className=" mx-5">
            <Form.Item
              rules={[
                {
                  required: false,
                  message: "Please read privacy policy!",
                },
              ]}
            >
              <Checkbox
                checked={privacyCheck}
                onClick={() => setPrivacy(!privacyCheck)}
              >
                I've read and accept the{" "}
                <a
                  className=" text-[#0d6efd]"
                  href="https://worldbexevents.com/privacy-policy/"
                >
                  Privacy Policy.
                </a>
              </Checkbox>
            </Form.Item>
          </div>

          <div className=" mx-5">
            <Form.Item>
              <Checkbox
                checked={updateCheck}
                onClick={() => setUpdate(!updateCheck)}
              >
                Yes, please send me updates through emails and Viber
              </Checkbox>
            </Form.Item>
          </div>

          <div className=" col-span-6 sm:col-span-6 m-5 flex justify-center">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className=" w-96 bg-[#F4811F]"
              >
                SUBMIT
              </Button>
            </Form.Item>
          </div>

          <div className=" col-span-6 flex justify-center mb-16">
            <p className=" text-[16px]">
              Already have an account?
              <a
                className="text-[#df7e1b] hover:text-[#c86718]"
                href="/registration"
              >
                {" "}
                Sign in here !
              </a>
            </p>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
};

export default SignUpForm;
