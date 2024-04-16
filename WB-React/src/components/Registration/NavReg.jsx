import { MenuOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItemsReg from "./MenuItemsReg";

const NavReg = () => {
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
			<div className=" hidden justify-end gap-24 p-10 text-xl mr-10 flex-wrap font-semibold  md:flex">
				<div>
					<Link
						className=" hover:text-[#F4811F] text-black no-underline"
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
					<Link
						to="/registration"
						className=" text-[#F4811F] underline underline-offset-8"
					>
						Sign Up
					</Link>
				</div>
			</div>
			<MenuItemsReg showMenu={showMenu} active={active} />
		</div>
	);
};

export default NavReg;
