import { Checkbox, Form } from "antd";
import React from "react";

const SurveyFormTemplate = ({
	category,
	questions,
	form,
}) => {
	const arr = questions.map((q) => (q = { label: q.label, value: q.label }));

	return (
		<>
			{/* {surveys.length > 0 ? ( */}
			<Form form={form}>
				<div className=" m-auto w-[700px] border-2 mb-3 p-5 rounded-lg shadow-md bg-white">
					<div>
						<h1 className=" text-xl mb-2">1. {category}</h1>
					</div>
					<div>
						<Form.Item
							className=" ml-2"
							name={questions.length ? questions[0].questionId : ""}
							// key={i}
							// value={obj.label}
							rules={[
								{
									required: true,
									message: "Please Check!",
								},
							]}
							hasFeedback
						>
							<Checkbox.Group
								options={[...arr]}
								className="flex flex-col justify-start items-start m-5"
							/>
						</Form.Item>
						{/* {.map((obj, i) => (
							))} */}
					</div>
				</div>
			</Form>
			{/* ) : null} */}
		</>
	);
};

export default SurveyFormTemplate;
