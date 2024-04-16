import { MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, worldbex } from "../../assets/logos";
import MenuItemsHome from "./MenuItemshome";

const NavHome = () => {
	const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};
	return (
		<div>
			<div className="absolute right-6 md:hidden top-3 scale-125">
				<MenuOutlined
					onClick={showMenu}
					className="scale-125 cursor-pointer text-[#df7e1b] hover:text-[#b97838] "
				/>
			</div>
			<div className=" md:hidden flex justify-start sm:m-10 m-5">
				<img className=" sm:w-[67px] w-[37px]" src={worldbex} alt="/" />
			</div>
			<div className=" md:hidden flex justify-center sm:mb-8 mb-4">
				<img className=" sm:w-[400px] w-[279px]" src={logo} alt="/" />
			</div>
			<div className=" hidden md:flex justify-end gap-24 p-10 text-xl mr-10 flex-wrap font-semibold ">
				<div>
					<Link
						className="text-[#F4811F] underline underline-offset-8"
						href="https://worldbexevents.com/"
					>
						About WSI
					</Link>
				</div>
				<div>
					<Link className=" hover:text-[#F4811F] text-black no-underline" to="/login">
						Login
					</Link>
				</div>
				<div>
					<Link className=" hover:text-[#F4811F] text-black no-underline" to="/registration">
						Sign Up
					</Link>
				</div>
			</div>
			<MenuItemsHome showMenu={showMenu} active={active} />
		</div>
	);
};

export default NavHome;
