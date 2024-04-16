import { LeftOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../../../../../assets/logos";

const { Header } = Layout;

const SeminarHeader = () => {
	const navigate = useNavigate();
	return (
		<Header
			className=" "
			style={{
				background: "#F4811F",
				padding: 0,
			}}
		>
			<div className=" flex justify-between sm:mx-4 mx-3 h-full">
				<div className=" flex items-center gap-x-4">
					<LeftOutlined
						className=" cursor-pointer text-white scale-125"
						onClick={() => navigate(-1)}
					/>
					<img
						className=" w-[255px] xl:w-[320px] hidden sm:block"
						src={logo}
						alt="/"
					/>
				</div>
				<div className=" flex justify-center items-center gap-x-5">
					<h1 className=" uppercase text-white text-xl font-semibold">
						Seminar-2023
					</h1>
				</div>
			</div>
		</Header>
	);
};

export default SeminarHeader;
