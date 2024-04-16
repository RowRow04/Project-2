import { Modal } from "antd";
import React, { useState } from "react";
import { exclamationCircle } from "../../../../../assets/icons";
import { profileInfo } from "../../../../../constants/profileInfo";
import { eventInfo } from "../../../../../constants/static";
import PaymentChannel from "./PaymentChannel";

const PaymentForm = ({ attendeeData }) => {
	const { firstName, lastName, email, mobileNumber } = profileInfo[0];
	const { amount, convenienceFee, name } = eventInfo;

	const quantity = amount === "0" ? 0 : attendeeData[0].attendees.length;

	const total =
		amount === "0"
			? Number(amount) + Number(convenienceFee)
			: Number(amount) * Number(quantity) +
			  Number(convenienceFee) * Number(quantity);

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
	return (
		<>
			<div className=" w-[80%] max-w-[600px] mx-auto  mt-5 text-lg bg-white p-8">
				<h1 className=" text-4xl text-center font-semibold mb-10 text-[#c25a04] uppercase">
					Payment
				</h1>
				<div>
					<p className=" uppercase font-bold">Name</p>
					<p className=" uppercase mx-4 my-2">{`${firstName} ${lastName}`}</p>
				</div>
				<div>
					<p className=" uppercase font-bold">Email</p>
					<p className=" mx-4 my-2">{email}</p>
				</div>
				<div>
					<p className=" uppercase font-bold">Mobile</p>
					<p className=" mx-4 my-2">{`+${mobileNumber}`}</p>
				</div>
				<div className=" border-t-2 border-b-2">
					<div className=" flex justify-between mt-3">
						<p className=" uppercase font-bold">Checkout Summary</p>
						<p className=" mx-4 my-2 uppercase">amount</p>
					</div>
					<div className=" flex justify-between">
						<p className=" uppercase">
							{amount === "0" ? `${name} X1` : `${name} X${quantity}`}
						</p>
						<p className=" mx-4 my-2 uppercase">
							PHP {amount === "0" ? amount : amount * quantity}.00
						</p>
					</div>
					<div className=" flex justify-between">
						<p className=" ">Convenience Fee</p>
						<p className=" mx-4 my-2 uppercase">
							PHP {amount === "0" ? convenienceFee : convenienceFee * quantity}
							.00
						</p>
					</div>
				</div>
				<div className=" flex justify-between mt-5">
					<p className=" uppercase font-bold">Total</p>
					<p className=" mx-4 my-2 uppercase font-bold">
						PHP {total.toFixed(2)}
					</p>
				</div>
				{amount === "0" && (
					<div className=" flex justify-center mt-10">
						<button
							className=" py-2 px-7 bg-[#ffc107] font-bold rounded-lg"
							onClick={showModal}
						>
							Submit
						</button>
					</div>
				)}
				{amount === "0" || <PaymentChannel />}
				<Modal
					title=""
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
					centered
					width={500}
					style={{
						textAlign: "center",
					}}
					// bodyStyle={{
					// 	height: 100,
					// }}
					footer={[
						<div key="footer" className=" flex justify-center gap-4 mb-4 mt-10">
							<button
								className=" bg-gray-400 text-white hover:text-white hover:bg-gray-500 px-9 py-3 rounded-md font-semibold uppercase "
								key="back"
								onClick={handleCancel}
							>
								Cancel
							</button>
							<button
								className=" bg-[#df7e1b] text-white hover:text-white hover:bg-[#c86718] px-9 py-3 rounded-md font-semibold uppercase"
								key="submit"
								onClick={handleOk}
							>
								Proceed
							</button>
						</div>,
					]}
				>
					<div className=" flex flex-col items-center justify-center gap-5 pt-5">
						<img
							src={exclamationCircle}
							alt="/"
							className=" w-[85px] h-[85px]"
						/>
						<div>
							<h1 className=" text-xl">Confirmation</h1>
							<p className=" text-lg">Do you want to proceed?</p>
						</div>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default PaymentForm;
