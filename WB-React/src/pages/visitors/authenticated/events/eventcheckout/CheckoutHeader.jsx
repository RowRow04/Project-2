import { LeftOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../../../../assets/logos";
import AvatarNav from "../../layout/Navbar/AvatarNav";


const { Header } = Layout;

const CheckoutHeader = () => {
	const navigate = useNavigate();
	return (
		<Header
			className=" "
			style={{
				background: "#F4811F",
				padding: 0,
			}}
		>
			<div className=" flex justify-between sm:mx-4 mx-3">
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
					<label className="">
						<Link
							to="/profile"
							className=" text-white hover:underline hover:text-white"
						>
							Christopher Dunagaran
						</Link>
					</label>

					<AvatarNav />
				</div>
			</div>
		</Header>
	);
};

export default CheckoutHeader;
