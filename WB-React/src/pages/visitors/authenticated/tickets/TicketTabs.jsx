import { ConfigProvider, Tabs } from "antd";
import React from "react";
import TicketContentExpired from "./TicketContentExpired";
import { default as TicketContentUnused } from "./TicketContentUnused";
import TicketHeader from "./TicketHeader";

const getItem = (key, label, children, className) => {
	return {
		key,
		label,
		children,
		className,
	};
};

const items = [
	getItem("unused", "UNUSED", <TicketContentUnused />),
	getItem("expired", "EXPIRED", <TicketContentExpired />, "bg-white"),
];

const TicketTabs = () => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorBgBase: "white",
					colorPrimary: " #df7e1b",
				},
			}}
		>
			<div className=" mx-5 my-8">
				<TicketHeader />
				<Tabs
					defaultActiveKey="unused"
					items={items}
					tabBarStyle={{
						color: "#959595",
					}}
				/>
			</div>
		</ConfigProvider>
	);
};

export default TicketTabs;
