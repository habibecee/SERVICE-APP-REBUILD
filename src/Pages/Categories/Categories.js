import React from "react";
import { useSelector } from "react-redux";
import CategoryBox from "./companents/categoryBox";

const Categories = (props) => {
	const categories = useSelector((state) => state.category);
	console.log("Categories", categories);

	let categoriesJSX = [];

	if (categories) {
		categories.map((item, index) => {
			categoriesJSX.push(
				<CategoryBox
					key={index}
					id={item.id}
					name={item.name}
					image={item.image}
					slug={item.slug}
				/>
			);
		});
	} else {
		categoriesJSX = <strong key="1">Loading...</strong>;
	}

	return (
		<main className="container p-3">
			<div className="row row-cols-1 row-cols-md-4 mb-3 text-center">
				{categoriesJSX}
			</div>
		</main>
	);
};

export default Categories;
