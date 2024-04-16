import { PlusOutlined } from "@ant-design/icons";
import { Checkbox, DatePicker, Form, Input, InputNumber } from "antd";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { eventInfo } from "../../../../../constants/static";

const AttendeeForm = ({
  form,
  onFinishHandler,
  onFinishHandlerAtt,
  isChecked,
  setIsChecked,
}) => {
  const { amount } = eventInfo;

  const [placeholderPrc, setPlaceholderPrc] = useState("PRC License Number");
  const [placeholderExpDate, setPlaceholderExpDate] = useState("YYYY-MM-DD");

  const formRef = React.useRef(null);
  return (
    <>
      {amount === "0" && (
        <Form
          layout="vertical"
          className=" w-[80%] max-w-[600px] mx-auto border-b-2 mt-5 bg-white rounded-lg p-5 shadow-2xl "
          ref={formRef}
          form={form}
          onFinish={onFinishHandlerAtt}
        >
          <h1 className=" text-4xl text-center font-semibold mb-10">
            Attendee
          </h1>

          <h1 className=" text-2xl mb-2">Attendee 1</h1>
          <Form.Item
            className=""
            label="PRC License Number"
            name="prcLicenseNumber"
            rules={[
              {
                required: true,
                message: "Please enter PRC License Number!",
              },
            ]}
          >
            <InputNumber
              size="large"
              className=" w-full py-1"
              placeholder={placeholderPrc}
              min={0}
              parser={(value) => value.replace(/\D/g, "")}
              controls={false}
              // value={inputValue}
              // onChange={(value) => setInputValue(value)}
              disabled={isChecked}
            />
          </Form.Item>

          <Checkbox
            className=" mb-5"
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
              if (e.target.checked) {
                setPlaceholderExpDate("N/A");
                formRef.current?.setFieldsValue({
                  prcLicenseNumber: "N/A!",
                  expiryDate: "",
                });
              } else {
                formRef.current?.setFieldsValue({
                  prcLicenseNumber: "",
                });
                setPlaceholderPrc("PRC License Number");
                setPlaceholderExpDate("YYYY/MM/DD");
              }
            }}
          >
            No PRC Number
          </Checkbox>

          <Form.Item
            className=""
            label="Expiry Date"
            name="expiryDate"
            dependencies={!isChecked}
            rules={[
              {
                required: !isChecked,
                message: "Please choose Expiry Date!",
              },
            ]}
          >
            <DatePicker
              size="large"
              className=" w-full py-2"
              placeholder={placeholderExpDate}
              format="YYYY/MM/DD"
              disabled={isChecked}

              // value={selectedDate}
              // onChange={setSelectedDate}
            />
          </Form.Item>

          <hr className=" border-b-2 border-[#df7e1b] mx-0"></hr>
        </Form>
      )}
      {amount === "0" || (
        <Form
          form={form}
          onFinish={onFinishHandler}
          layout="vertical"
          className=" w-[80%] max-w-[600px] mx-auto mt-5 mb-2 border-b-2 bg-white rounded-lg pt-5 m-4"
          ref={formRef}
        >
          <h1 className=" text-4xl text-center font-semibold mb-10">
            Attendee
          </h1>

          <Form.List
            name={"attendees"}
            initialValue={[
              {
                firstName: "test",
                lastName: "test",
                email: "test@gmail.com",
                mobile: "+639566684909",
              },
            ]}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => {
                  return (
                    <div className=" m-4 relative mt-10" key={index}>
                      {index === 0 || (
                        <button
                          className=" px-6 py-3 border-2 border-red-600 absolute top-0 right-0"
                          onClick={() => {
                            remove(field.name);
                          }}
                        >
                          Remove
                        </button>
                      )}

                      <h1 className=" text-2xl mb-2">Attendee {index + 1}</h1>
                      <Form.Item
                        className=""
                        label="First Name"
                        name={[field.name, "firstName"]}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: "Please enter First name!",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          className=" w-full py-2"
                          placeholder="First name"
                        />
                      </Form.Item>
                      <Form.Item
                        className=""
                        label="Last Name"
                        name={[field.name, "lastName"]}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: "Please enter Last name!",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          className=" w-full py-2"
                          placeholder="Last name"
                        />
                      </Form.Item>
                      <Form.Item
                        className=""
                        label="Email Address"
                        name={[field.name, "email"]}
                        hasFeedback
                        rules={[
                          {
                            required: true,

                            message: "Please input E-mail address!",
                          },
                          {
                            type: "email",
                            message: "This is not valid E-mail address!",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          className=" w-full py-2"
                          placeholder="Email"
                        />
                      </Form.Item>
                      <Form.Item
                        className=""
                        label="Mobile Number" //mobile
                        name={[field.name, "mobile"]}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: "Please enter Mobile number!",
                          },
                        ]}
                      >
                        <PhoneInput
                          className=" border-2 rounded-md p-4"
                          international={true}
                          countryCallingCodeEditable={false}
                          defaultCountry="PH"
                          // value={values}
                          // onChange={setValues}
                          maxLength="16"
                        />
                      </Form.Item>
                      <hr className=" border-b-1 border-[#df7e1b] mt-10 w-full"></hr>
                    </div>
                  );
                })}

                <Form.Item className=" mx-4">
                  <button
                    className=" uppercase px-6 py-3 text-white bg-[#df7e1b] mt-5 rounded-lg hover:bg-[#b97838]"
                    onClick={() => {
                      add();
                    }}
                  >
                    <PlusOutlined /> Add attendee
                  </button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      )}
    </>
  );
};

export default AttendeeForm;
