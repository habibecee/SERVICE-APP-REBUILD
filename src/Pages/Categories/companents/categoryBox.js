import React from "react";

const CategoryBox = (props) => {
	return (
		<div className="col categoryBox-div">
			<div className="card mb-4 rounded-3 shadow-lg categoryBox">
				<div className="card-header py-3 h-25">
					<h4 className="my-0 fw-normal">{props.name}</h4>
				</div>
				<div className="card-body">
					<img
						src={props.image}
						style={{
							width: "70%",
							height: "70%",
							margin: "20px",
							borderRadius: "10px",
						}}
					/>
					<a
						href={`#/category/${props.slug}`}
						className="w-100 btn btn-lg btn-light cardDetails"
					>
						See Details
					</a>
				</div>
			</div>
		</div>
	);
};

export default CategoryBox;
