import { Layout } from "antd";
import React from "react";
import {
	org1,
	org10,
	org11,
	org12,
	org13,
	org14,
	org2,
	org3,
	org4,
	org5,
	org6,
	org7,
	org8,
	org9,
} from "../../../../assets/organizers";

const { Footer } = Layout;

const Foot = () => {
	return (
		<Footer
			className=" sticky bottom-0"
			style={{
				textAlign: "center",
				backgroundColor: "white",
				padding: 0,
			}}
		>
			<div className=" flex flex-col justify-center content-center ">
				<h1 className=" text-center font-bold text-sm text-[#686868] mb-2 mt-5">
					Organizers of:
				</h1>
			</div>

			<div className=" flex justify-center flex-wrap lg: gap-x-2 mb-5">
				<img
					src={org1}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6 "
				/>
				<img
					src={org2}
					alt=""
					className=" w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6  "
				/>

				<img
					src={org3}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>
				<img
					src={org4}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>

				<img
					src={org5}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>
				<img
					src={org6}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>

				<img
					src={org7}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>
				<img
					src={org8}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>

				<img
					src={org9}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>
				<img
					src={org10}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>

				<img
					src={org11}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>
				<img
					src={org12}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>

				<img
					src={org13}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6    "
				/>
				<img
					src={org14}
					alt=""
					className="  w-[78px] h-[78px] hover:scale-150 cursor-pointer transform-all duration-300 ease-out hover:-translate-y-6   "
				/>
			</div>
		</Footer>
	);
};

export default Foot;
