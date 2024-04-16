import React from "react";
import { survey } from "../../../../../constants/survey";
import SurveyFormTemplate from "./SurveyFormTemplate";

const SurveyForm = ({ current, setCurrent, form }) => {
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
			<h1 className=" text-center text-4xl font-semibold mt-5 mb-10">Survey</h1>
			{newArray.map((obj, i) => (
				<SurveyFormTemplate
					key={i}
					category={obj.category}
					questions={obj.questions}
					current={current}
					setCurrent={setCurrent}
					form={form}
					// onFinishHandler1={onFinishHandler}
				/>
			))}
		</>
	);
};

export default SurveyForm;
