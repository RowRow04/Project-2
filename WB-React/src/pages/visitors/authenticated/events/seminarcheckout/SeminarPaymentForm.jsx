import React from "react";
import { profileInfo } from "../../../../../constants/profileInfo";
import { seminarInfo } from "../../../../../constants/seminarInfo";
import PaymentChannel from "../eventcheckout/PaymentChannel";

const SeminarPaymentForm = () => {
	const { firstName, lastName, email, mobileNumber } = profileInfo[0];
	const { packages } = seminarInfo;
	const { name, earlyBirdRates, convenienceFee } = packages[0];
	const total = Number(earlyBirdRates[0].amount) + Number(convenienceFee);
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
						<p className=" capitalize">{name}</p>
						<p className=" mx-4 my-2 uppercase">{Number(earlyBirdRates[0].amount).toFixed(2)}</p>
					</div>
					<div className=" flex justify-between">
						<p className=" ">Convenience Fee</p>
						<p className=" mx-4 my-2 uppercase">{Number(convenienceFee).toFixed(2)}</p>
					</div>
				</div>
				<div className=" flex justify-between mt-5">
					<p className=" uppercase font-bold">Total</p>
					<p className=" mx-4 my-2 uppercase font-bold">PHP {Number(total).toFixed(2)}</p>
				</div>
				<PaymentChannel />
			</div>
		</>
	);
};

export default SeminarPaymentForm;
