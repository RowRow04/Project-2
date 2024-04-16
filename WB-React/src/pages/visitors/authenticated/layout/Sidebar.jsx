import worldbex from "../../../../assets/logos/worldbex.png";

import { CalendarOutlined, SnippetsOutlined } from "@ant-design/icons";
import { ConfigProvider, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }) => {
	const location = useLocation();
	const [selectedKey, setSelectedKey] = useState(location.pathname);

	useEffect(() => {
		setSelectedKey(location.pathname.split("/").join(" ").trim().split(" ")[0]);
	}, [location]);

	const getItem = (label, key, icon, children) => {
		return {
			key,
			icon,
			children,
			label,
		};
	};

	const items = [
		getItem(<Link to="/events">Events</Link>, "events", <CalendarOutlined />),
		getItem(
			<Link to="/tickets">Tickets</Link>,
			"tickets",
			<SnippetsOutlined />
		),
	];
	return (
		<div className=" sticky- bg-white">
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: "white",
						colorPrimaryBg: "#F4811F",
						colorBgTextHover: "#F4811F",
					},
				}}
			>
				<Sider
					className=" sm:block hidden h-screen relative"

					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
					breakpoint="lg"
					theme="light"
					width={250}

					collapsedWidth={50}
				>
					<div className="">
						{collapsed || (
							<img
								className=" w-[100px] h-[100px] mx-auto my-5 flex items-center"
								src={worldbex}
								alt=""
							/>
						)}
						{collapsed && (
							<img
								className=" w-[40px] h-[40px] mx-auto my-5 flex items-center"
								src={worldbex}
								alt=""
							/>
						)}
						<Menu
							mode="inline"
							items={items}
							defaultSelectedKeys={`${selectedKey}`}
							selectedKeys={[selectedKey]}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexDirection: "column",
							}}
						/>
						{collapsed || (
							<div className=" text-center absolute bottom-1 left-0 right-0">
								<p className=" text-[#5E5E5E]">For question and inquiries</p>
								<p>inquire@worldbexevents.com</p>
								<p className=" text-[#5E5E5E]">or contact us at</p>
								<p>8656 9239</p>
							</div>
						)}
					</div>
				</Sider>
			</ConfigProvider>
		</div>
	);
};

export default Sidebar;

