import React from "react";
import { eventTicket } from "../../../../../constants/eventTicket";
import TicketCardTemplate from "./TicketCardTemplate";

const TicketCardLayout = () => {
	return (
		<div className=" grid xl:grid-cols-10 grid-cols-6 gap-5">
			{eventTicket.map((eventTicket) => {
				return (
					<TicketCardTemplate
						key={eventTicket.transactionId}
						eventTicket={eventTicket}
						// firstName={obj.firstName}
					/>
				);
			})}
		</div>
	);
};

export default TicketCardLayout;
