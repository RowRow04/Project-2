import { Layout } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./events/Navbar";
import Sidebar from "./events/Sidebar";
import Foot from "./layout/Foot";
import TicketMenu from "./tickets/TicketTabs";

const { Content } = Layout;

const AfterLoginTicket = () => {
	const [collapsed, setCollapsed] = useState(false);
	return (
		<Layout
			style={{
				minHeight: "100vh",
			}}
		>
			<Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
			<Layout>
				<Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
				<TicketMenu />
				<Content>
					<Outlet />
				</Content>
				<Foot />
			</Layout>
		</Layout>
	);
};

export default AfterLoginTicket;
