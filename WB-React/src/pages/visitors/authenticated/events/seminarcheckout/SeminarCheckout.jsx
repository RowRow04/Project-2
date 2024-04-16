import { ConfigProvider, Form, Layout, Steps } from "antd";
import React, { useState } from "react";
import PricesForm from "./PricesForm";
import SeminarAttendee from "./SeminarAttendee";
import SeminarCheckoutFooter from "./SeminarCheckoutFooter";
import SeminarHeader from "./SeminarHeader";
import SeminarPaymentForm from "./SeminarPaymentForm";

const SeminarCheckout = () => {
	const [form] = Form.useForm();
	const { Content, Footer } = Layout;
	const [current, setCurrent] = useState(0);
	const [isCheckedMN, setIsCheckedMN] = useState(false);
	const [isCheckedPRC, setIsCheckedPRC] = useState(false);
	// const [isActive, setIsActive] = useState({});

	const onChange = (value) => {
		setCurrent(value);
	};
	const [attendeeData, setAttendeeData] = useState([]);
	const [attendeeData1, setAttendeeData1] = useState([]);
	const onFinishHandler = (values) => {
		setAttendeeData([...attendeeData, values]);
		setCurrent(current + 1);
	};
	const onFinishHandler1 = (values) => {
		setAttendeeData1([...attendeeData1, values]);
		setCurrent(current + 1);
	};
	const handleSubmit = () => {
		if (current === 1) {
			form.submit();
		}
		if (current === 0) {
			form.submit();
		}
	};
	const forms = [
		<PricesForm
			// isActive={isActive} setIsActive={setIsActive}
			form={form}
			attendeeData1={attendeeData1}
			setAttendeeData1={setAttendeeData1}
			onFinishHandler1={onFinishHandler1}
		/>,
		<SeminarAttendee
			form={form}
			onFinishHandler={onFinishHandler}
			isCheckedMN={isCheckedMN}
			setIsCheckedMN={setIsCheckedMN}
			isCheckedPRC={isCheckedPRC}
			setIsCheckedPRC={setIsCheckedPRC}
		/>,
		<SeminarPaymentForm />,
	];
	const items = [
		{
			title: "1",
		},
		{
			title: "2",
		},
		{
			title: "3",
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
				<Layout className=" min-h-screen">
					<SeminarHeader />
					<Steps
						type="navigation"
						current={current}
						onChange={onChange}
						className=" "
						items={items}
					/>
					<Content className=" ">{forms[current]}</Content>
					<Footer
						style={{
							padding: 50,
						}}
					>
						<SeminarCheckoutFooter
							current={current}
							setCurrent={setCurrent}
							handleSubmit={handleSubmit}
						/>
					</Footer>
				</Layout>
			</ConfigProvider>
		</>
	);
};

export default SeminarCheckout;
