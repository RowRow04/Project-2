import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
	return (
		<div className=" md:block flex justify-center items-center flex-col md:text-left text-center">
			<h1 className=" uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-[#F4811F]">
				Welcome to
			</h1>
			<h1 className=" uppercase text-2xl sm:text-3xl md:text-4xl font-bold text-[#F4811F]">
				Worldbex Services International
			</h1>
			<h1 className=" mt-7">THE LEADING EXHIBITION AND EVENTS MANAGEMENT</h1>
			<h1>COMPANY IN THE PHILIPPINES WITH OVER 25 YEARS OF EXCELLENCE</h1>
			<div className=" grid grid-cols-2 gap-x-5">
				<div className=" flex flex-col gap-y-10 grid-cols-1 mt-24">
					<Link
						className="text-[#F4811F] text-lg font-bold sm:block hidden"
						to="/registration"
					>
						Not Yet Registered ?
					</Link>
					<div>
						<Link
							to="/registration"
							className=" uppercase py-3 xl:px-[75px] lg:px-[50px] px-[30px] bg-[#F4811F] hover:bg-[#df7e1b] text-white md:rounded-none rounded-xl"
						>
							Register
						</Link>
					</div>
				</div>
				<div className=" flex flex-col gap-y-10 grid-cols-1 mt-24">
					<Link
						className="text-[#F4811F] text-lg font-bold sm:block hidden"
						to="/registration"
					>
						Already Registered ?
					</Link>
					<div>
						<Link
							to="/login"
							className=" uppercase py-3 xl:px-[75px] lg:px-[50px] px-[30px] bg-[#F4811F] hover:bg-[#df7e1b] text-white md:rounded-none rounded-xl"
						>
							Sign in
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
