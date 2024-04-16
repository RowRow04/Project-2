import { Checkbox, DatePicker, Form, Input, InputNumber } from "antd";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { profileInfo } from "../../../../../constants/profileInfo";

const SeminarAttendee = ({
	form,
	onFinishHandler,
	isCheckedMN,
	setIsCheckedMN,
	isCheckedPRC,
	setIsCheckedPRC,
}) => {
	const { firstName, lastName, position, company, email, mobileNumber } =
		profileInfo[0];
	const [placeholderPrc, setPlaceholderPrc] = useState("PRC License Number");
	const [placeholderExpDate, setPlaceholderExpDate] = useState("YYYY-MM-DD");
	const [placeholderMN, setPlaceholderMN] = useState("Middle Name");
	const formRef = React.useRef(null);

	return (
		<>
			<Form
				layout="vertical"
				className=" w-[80%] max-w-[600px] mx-auto border-b-2 mt-5 bg-white rounded-lg p-5"
				ref={formRef}
				form={form}
				onFinish={onFinishHandler}
				// onFinish={onFinishHandler1}
			>
				<h1 className=" text-4xl text-center font-semibold mb-10">Attendee</h1>
				<Form.Item
					className=""
					label={<h1 className=" font-semibold text-lg">First Name</h1>}
					name="firstName"
					initialValue={firstName}
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
					label={<h1 className=" font-semibold text-lg">Middle Name</h1>}
					name="middleName"
					rules={[
						{
							required: true,
							message: "Please enter Middle name!",
						},
					]}
				>
					<Input
						size="large"
						className=" w-full py-2"
						placeholder={placeholderMN}
						disabled={isCheckedMN}
					/>
				</Form.Item>
				<Form.Item>
					<Checkbox
						className=" mb-5"
						checked={isCheckedMN}
						onChange={(e) => {
							setIsCheckedMN(e.target.checked);
							if (e.target.checked) {
								formRef.current?.setFieldsValue({
									middleName: "N/A!",
								});
							} else {
								formRef.current?.setFieldsValue({
									middleName: "",
								});
								setPlaceholderMN("Middle Name");
							}
						}}
					>
						No Middle Name
					</Checkbox>
				</Form.Item>
				<Form.Item
					className=""
					label={<h1 className=" font-semibold text-lg">Last Name</h1>}
					name={"lastName"}
					initialValue={lastName}
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
					className=" mb-1"
					label={<h1 className=" font-semibold text-lg">Designation</h1>}
					name="designation"
					initialValue={position}
					// hidden={isNotCheck}
					rules={[
						{
							required: true,
							message: "Enter your Designation!",
						},
					]}
				>
					<Input
						size="large"
						className=" w-full py-2"
						placeholder="Designation"
						// hidden={isNotCheck}
					/>
				</Form.Item>
				<Form.Item
					className=""
					label={<h1 className=" font-semibold text-lg">Company</h1>}
					name="company"
					initialValue={company}
					// hidden={isNotCheck}
					rules={[
						{
							required: true,
							message: "Please enter Company name!",
						},
					]}
				>
					<Input
						size="large"
						className=" w-full py-2"
						placeholder="Company"
						// hidden={isNotCheck}
					/>
				</Form.Item>
				<Form.Item
					className=""
					label={<h1 className=" font-semibold text-lg">Mobile Number</h1>} //mobile
					name="mobile"
					initialValue={"+" + mobileNumber}
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
				<Form.Item
					className=""
					label={<h1 className=" font-semibold text-lg">Email Address</h1>}
					name="email"
					initialValue={email}
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
					<Input size="large" className=" w-full py-2" placeholder="Email" />
				</Form.Item>
				<Form.Item
					className=""
					label={<h1 className=" font-semibold text-lg">PRC License Number</h1>}
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
						disabled={isCheckedPRC}
					/>
				</Form.Item>
				<Form.Item>
					<Checkbox
						className=" mb-5"
						checked={isCheckedPRC}
						onChange={(e) => {
							setIsCheckedPRC(e.target.checked);
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
				</Form.Item>
				<Form.Item
					className=""
					label={<h1 className=" font-semibold text-lg">Expiry Date</h1>}
					name="expiryDate"
					// dependencies={!isCheckedPRC}
					rules={[
						{
							required: !isCheckedPRC,
							message: "Please choose Expiry Date!",
						},
					]}
				>
					<DatePicker
						size="large"
						className=" w-full py-2"
						placeholder={placeholderExpDate}
						format="YYYY/MM/DD"
						disabled={isCheckedPRC}

						// value={selectedDate}
						// onChange={setSelectedDate}
					/>
				</Form.Item>

				<hr className=" border-b-2 border-[#df7e1b] mx-0"></hr>
			</Form>
		</>
	);
};

export default SeminarAttendee;
