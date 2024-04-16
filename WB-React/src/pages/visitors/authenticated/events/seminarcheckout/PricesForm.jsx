import { Card, Checkbox, Form, Space } from "antd";
import React, { useState } from "react";
import { seminarInfo } from "../../../../../constants/seminarInfo";

const PricesForm = ({ form, onFinishHandler1 }) => {
	const { packages } = seminarInfo;
	const [packageDate1, setPackageDate1] = useState([]);

	const seminarData = packages.map((packages, index) => {
		const { name, amount, packageDate, imgSrc, earlyBirdRates, packageId } =
			packages;
		const dates = packageDate.split(";");
		let year = "";
		let formattedDates = dates.map((date, index) => {
			const d = new Date(date);
			if (!year) {
				year = d.getFullYear();
			}
			const month = d.toLocaleString("default", { month: "short" });
			let day = d.toLocaleString("default", { day: "numeric" });
			if (day.length === 1) {
				day = day.padStart(2, "0");
			}

			let monthName = `${month} `;
			if (index > 0 && dates[index - 1].slice(0, 7) === date.slice(0, 7)) {
				monthName = "";
			}
			return `${monthName}${day}`;
		});

		formattedDates = formattedDates.join(", ") + `, ${year}`;

		const handleCheckboxChange = (e) => {
			const { checked } = e.target;
			if (checked) {
				if (packageDate1.includes(packageDate)) return;
				setPackageDate1([...packageDate1, packageDate]);
			}
			// else {
			// 	setPackageDate1(packageDate1.filter((date) => date !== packageDate));
			// }

			// else {
			// 	setPackageDate1(
			// 		packageDate1.filter((packageDate) => packageDate !== formattedDates)
			// 	);
			// }
		};

		return (
			<Form.Item
				name={packageId}
				rules={[
					{
						required: true,
						message: "Please choose ticket!",
					},
				]}
			>
				<Space className="my-2">
					<Checkbox
						key={index}
						className=" checkbox "
						// value={packageDate}
						onChange={handleCheckboxChange}
					>
						<Card
						// className={
						// 	Object.values(form.getFieldsValue()).find(
						// 		(val) => val === packageDate
						// 	)
						// 		? " border-red-900 border-2"
						// 		: "border-none"
						// }
						>
							<div className=" flex justify-between items-start mx-2 mb-2">
								<div>
									<p className=" font-semibold text-[16px]">{formattedDates}</p>
									<p className=" text-[16px] capitalize">{name}</p>
								</div>
								<div className=" min-w-[25%] leading-none flex flex-col items-end">
									<p className=" uppercase text-[#dc3545] font-semibold text-[9px]">
										Early Bird Rate
									</p>
									<p className=" font-semibold text-[18px]">
										PHP {Number(earlyBirdRates[0].amount).toFixed(2)}
									</p>
									<p className=" line-through font-semibold text-[13px]">
										{Number(amount).toFixed(2)}
									</p>
								</div>
							</div>
							<img src={imgSrc} alt="/" />
						</Card>
					</Checkbox>
				</Space>
			</Form.Item>
		);
	});

	return (
		<>
			<Form
				onFinish={onFinishHandler1}
				layout="vertical"
				className=" w-[80%] max-w-[600px] mx-auto border-b-2 mt-5 bg-white rounded-lg p-5"
				// ref={formRef}
				form={form}
				// onFinish={onFinishHandler1}
			>
				<h1 className=" text-4xl text-center font-semibold mb-3 uppercase">
					Prices
				</h1>
				<p className=" text-center mb-5">
					Purchased tickets will not be displayed in the list
				</p>
				{/* <Form.Item>
					<Checkbox.Group
						options={{
							label: "test",
							value: { seminarData },
						}}
					/>
				</Form.Item> */}
				{seminarData}
			</Form>
		</>
	);
};

export default PricesForm;
