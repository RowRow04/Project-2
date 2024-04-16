import { DownloadOutlined } from "@ant-design/icons";
import { saveAs } from "file-saver";
import React from "react";
import { qrCodeImage } from "../../../../../constants/static";

const TestSurvey = () => {
	const downloadImage = () => {
		saveAs(`${qrCodeImage.image}`, "ID-QRCODE.jpg"); // Put your image url here.
	};
	return (
		<div>
			<img src={qrCodeImage.image} alt="/" />

			<button
				onClick={downloadImage}
				className=" px-3 py-2 bg-red-100 rounded-lg"
			>
				<DownloadOutlined className=" " />
				SAVE IMAGE
			</button>
		</div>
	);
};

export default TestSurvey;
