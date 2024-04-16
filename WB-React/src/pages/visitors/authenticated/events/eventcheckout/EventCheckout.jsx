import { ConfigProvider, Form, Layout, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { eventInfo } from "../../../../../constants/static";
import AttendeeForm from "./AttendeeForm";
import CheckoutFooter from "./CheckoutFooter";
import CheckoutHeader from "./CheckoutHeader";
import PaymentForm from "./PaymentForm";
import SurveyForm from "./SurveyForm";

const EventCheckout = () => {
	const [current, setCurrent] = useState(0);
	const onChange = (value) => {
		setCurrent(value);
	};
	const [form] = Form.useForm();

	const { Content, Footer } = Layout;

	const steps = [
		{
			status: current === 0 ? "process" : "finish",
			title: "Attendee",
		},
		{
			status: current === 1 ? "process" : current < 1 ? "wait" : "finish",
			title: "Survey",
		},
		{
			status:
				current === 1 && eventInfo.surveys.length === 0
					? "process"
					: current === 1 && eventInfo.surveys.length > 0
					? "wait"
					: current === 2 && eventInfo.surveys.length > 0
					? "process"
					: current === 0 && eventInfo.surveys.length > 0
					? "wait"
					: current === 0 && eventInfo.surveys.length === 0
					? "wait"
					: "finish",
			title: "Payment",
		},
	];
	const [isChecked, setIsChecked] = useState(false);
	const [attendeeData, setAttendeeData] = useState([]);
	const [attendeeDataAtt, setAttendeeDataAtt] = useState([]);

	const onFinishHandler = (values) => {
		setAttendeeData([...attendeeData, values]);
		setCurrent(current + 1);
	};
	const onFinishHandlerAtt = (values) => {
		setAttendeeDataAtt([...attendeeDataAtt, values]);
		setCurrent(current + 1);
	};
	useEffect(() => {
		if (current === 0) {
			setAttendeeData([]);
		}
	}, [current]);
	const handleSubmit = () => {
		if (eventInfo.surveys.length !== 0 && current === 1)
			form.validateFields().then((values) => {
				setCurrent(current + 1);
			});
		if (current === 0) {
			form.submit();
		}
	};

	const filteredSteps =
		eventInfo.surveys.length === 0
			? steps.filter((step) => step.title !== "Survey")
			: steps;
	const forms = [
		<AttendeeForm
			form={form}
			onFinishHandler={onFinishHandler}
			onFinishHandlerAtt={onFinishHandlerAtt}
			isChecked={isChecked}
			setIsChecked={setIsChecked}
		/>,
		current !== 1 || eventInfo.surveys.length === 0 ? (
			<PaymentForm attendeeData={attendeeData} />
		) : (
			<SurveyForm current={current} setCurrent={setCurrent} form={form} />
		),
		<PaymentForm attendeeData={attendeeData} />,
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
					<CheckoutHeader />

					<Steps
						type="navigation"
						current={current}
						onChange={onChange}
						className=" hidden"
						items={filteredSteps}
					/>
					<Content className=" ">{forms[current]}</Content>
					<Footer
						style={{
							padding: 50,
						}}
					>
						<CheckoutFooter
							current={current}
							setCurrent={setCurrent}
							form={form}
							handleSubmit={handleSubmit}
						/>
					</Footer>
				</Layout>
			</ConfigProvider>
		</>
	);
};

export default EventCheckout;
