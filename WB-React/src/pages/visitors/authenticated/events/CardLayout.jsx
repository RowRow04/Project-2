import React from "react";

import CardTemplate from "./CardTemplate";

const CardLayout = () => {
	const availEvent = [
		"8443e380-7c29-11ed-8dce-0ebf1fc6bf7e",
		"2443e380-7c29-11ed-8dce-0ebf1fc6bf8se2",
		"4443e380-7c29-11ed-8dce-0ebf1fc6bf7dass",
	];

	const data = [
		{
			id: 11,
			eventId: "8443e380-7c29-11ed-8dce-0ebf1fc6bf7e",
			name: "WORLDBEX 2023",
			date: "DECEMBER 15-16, 2023",
			dateSeries: "2023-12-15;2023-12-16",
			amount: "0",
			convenienceFee: "0",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0VpvBaifBxuegSAYA29XRMWgKOIbVotyWfkKPTLIPA&s",
			createdAt: "2022-12-15 03:35:27",
			updatedAt: "2022-12-15 03:35:27",
			dateFrom: "2023-01-15 00:00:00",
			dateTo: "2023-12-20 00:00:00",
			color: "#fca54e;#f4811f",
			type: "EVENT",
			eventName: "WORLDBEX",
		},
		{
			id: 12,
			eventId: "2443e380-7c29-11ed-8dce-0ebf1fc6bf8se",
			name: "WORLDBEX 2024",
			date: "DECEMBER 15-16, 2029",
			dateSeries: "2023-12-15;2023-12-16",
			amount: "50",
			convenienceFee: "0",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0VpvBaifBxuegSAYA29XRMWgKOIbVotyWfkKPTLIPA&s",
			createdAt: "2022-12-15 03:35:27",
			updatedAt: "2022-12-15 03:35:27",
			dateFrom: "2023-01-15 00:00:00",
			dateTo: "2023-12-20 00:00:00",
			color: "#fca54e;#f4811f",
			type: "EVENT",
			eventName: "WORLDBEX",
		},
		{
			id: 13,
			eventId: "4443e380-7c29-11ed-8dce-0ebf1fc6bf7das4",
			name: "WORLDBEX 2023",
			date: "DECEMBER 15-16, 2016",
			dateSeries: "2023-12-15;2023-12-16",
			amount: "0",
			convenienceFee: "0",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0VpvBaifBxuegSAYA29XRMWgKOIbVotyWfkKPTLIPA&s",
			createdAt: "2022-12-15 03:35:27",
			updatedAt: "2022-12-15 03:35:27",
			dateFrom: "2023-01-15 00:00:00",
			dateTo: "2023-12-20 00:00:00",
			color: "#fca54e;#f4811f",
			type: "EVENT",
			eventName: "WORLDBEX",
		},
		{
			id: 14,
			eventId: "4443e380-7c29-11ed-8dce-0ebf1fc6bf7dasf",
			name: "WORLDBEX 2023",
			date: "DECEMBER 15-16, 2013",
			dateSeries: "2023-12-15;2023-12-16",
			amount: "0",
			convenienceFee: "0",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0VpvBaifBxuegSAYA29XRMWgKOIbVotyWfkKPTLIPA&s",
			createdAt: "2022-12-15 03:35:27",
			updatedAt: "2022-12-15 03:35:27",
			dateFrom: "2023-01-15 00:00:00",
			dateTo: "2023-12-20 00:00:00",
			color: "#fca54e;#f4811f",
			type: "EVENT",
			eventName: "WORLDBEX",
		},
		{
			id: 15,
			eventId: "4443e380-7c29-11ed-8dce-0ebf1fc6bf7dasd",
			name: "WORLDBEX 2023",
			date: "DECEMBER 15-16, 2025",
			dateSeries: "2023-12-15;2023-12-16",
			amount: "0",
			convenienceFee: "0",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0VpvBaifBxuegSAYA29XRMWgKOIbVotyWfkKPTLIPA&s",
			createdAt: "2022-12-15 03:35:27",
			updatedAt: "2022-12-15 03:35:27",
			dateFrom: "2023-01-15 00:00:00",
			dateTo: "2023-12-20 00:00:00",
			color: "#fca54e;#f4811f",
			type: "EVENT",
			eventName: "WORLDBEX",
		},
		{
			id: 16,
			eventId: "4443e380-7c29-11ed-8dce-0ebf1fc6bf7dass",
			name: "WORLDBEX 2023",
			date: "DECEMBER 15-16, 2026",
			dateSeries: "2023-12-15;2023-12-16",
			amount: "0",
			convenienceFee: "0",
			imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG0VpvBaifBxuegSAYA29XRMWgKOIbVotyWfkKPTLIPA&s",
			createdAt: "2022-12-15 03:35:27",
			updatedAt: "2022-12-15 03:35:27",
			dateFrom: "2023-01-15 00:00:00",
			dateTo: "2023-12-20 00:00:00",
			color: "#fca54e;#f4811f",
			type: "EVENT",
			eventName: "WORLDBEX",
		},
	];

	return (
		<div className=" grid xl:grid-cols-10 grid-cols-6 gap-5">
			{data.map((obj) => {
				let isJoin = false;
				if (availEvent.includes(obj.eventId)) {
					isJoin = true;
				}
				return <CardTemplate key={obj.eventId} data={obj} isJoin={isJoin} />;
			})}
		</div>
	);
};

export default CardLayout;
