import { Modal } from "antd";
import React, { useState } from "react";
import { exclamationCircle } from "../../../../../assets/icons";
import { dragonpay, gcash, paypal } from "../../../../../assets/payment";

const PaymentChannel = () => {
	const [isModal, setIsModal] = useState(false);
	const [modalType, setModalType] = useState("");
	const showModal = (type) => {
		setModalType(type);
		setIsModal(true);
	};
	const handleOkGcash = () => {
		setIsModal(false);
		window.location.href = "https://www.gcash.com";
	};
	const handleOkDragonpay = () => {
		setIsModal(false);
		window.location.href = "https://www.dragonpay.ph";
	};
	const handleOkPaypal = () => {
		setIsModal(false);
		window.location.href = "https://www.paypal.com/us/home";
	};
	const handleCancel = () => {
		setIsModal(false);
	};

	return (
		<>
			<h1 className=" text-4xl text-center font-semibold mb-2 text-[#c25a04] uppercase">
				Channels
			</h1>
			<p className=" text-center text-sm mx-2">
				Please click your chosen payment option below to complete the
				transaction
			</p>
			<div className=" grid grid-cols-6 m-5 justify-center items-center gap-2 border-2">
				<div className=" col-span-2">
					<button onClick={() => showModal("Paypal")}>
						<img className="" src={paypal} alt="/" />
					</button>
				</div>
				<div className=" col-span-2">
					<button onClick={() => showModal("Dragonpay")}>
						<img src={dragonpay} alt="/" />
					</button>
				</div>
				<div className=" col-span-2">
					<button onClick={() => showModal("Gcash")}>
						<img src={gcash} alt="/" />
					</button>
				</div>
			</div>
			<Modal
				title=""
				open={isModal}
				onOk={handleOkGcash}
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
							onClick={
								modalType === "Gcash"
									? handleOkGcash
									: modalType === "Dragonpay"
									? handleOkDragonpay
									: handleOkPaypal
							}
						>
							Proceed
						</button>
					</div>,
				]}
			>
				<div className=" flex flex-col items-center justify-center gap-5 pt-5">
					<img src={exclamationCircle} alt="/" className=" w-[85px] h-[85px]" />
					<div>
						<h1 className=" text-xl">Confirmation</h1>
						<p className=" text-lg">Do you want to proceed with {modalType}?</p>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default PaymentChannel;
