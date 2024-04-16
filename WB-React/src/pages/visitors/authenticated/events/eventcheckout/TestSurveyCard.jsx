import { Checkbox } from "antd";
import React from "react";
import { survey } from "../../../../../constants/survey";

const Quesion = ({ category, questions }) => {
	return (
		<>
			<div className=" m-auto w-[700px] border-2 mt-10 p-5 rounded-lg shadow-md">
				<div>
					<h1 className=" text-xl">1. {category}</h1>
				</div>
				<div>
					{questions.map((obj, i) => (
						<div>
							<Checkbox key={i} value={obj.label}>
								<h1 className=" text-lg">{obj.label}</h1>
							</Checkbox>
							<br />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

const TestSurveyCard = () => {
	const newCategory = survey.reduce((groupedCategory, sepCategory) => {
		const category = sepCategory.category;
		if (groupedCategory[category] == null) groupedCategory[category] = [];
		groupedCategory[category].push(sepCategory);

		return groupedCategory;
	}, {});
	const newArray = Object.entries(newCategory).map((obj) => ({
		category: obj[0],
		questions: obj[1],
	}));

	return (
		<>
			{newArray.map((obj, i) => (
				<Quesion key={i} category={obj.category} questions={obj.questions} />
			))}
		</>
	);
};

export default TestSurveyCard;
