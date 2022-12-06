import React from "react";
import { useSelector } from "react-redux";

const Footer = (props) => {
	const categories = useSelector((state) => state.category);
	//console.log("FOOTER CATEGORİES", categories);

	let categoriesJSX = [];

	if (categories) {
		categories?.map((item, index) => {
			if (index >= 5) {
				return;
			}
			categoriesJSX.push(
				<li className="mb-1" key={index}>
					<a
						className="link-secondary text-decoration-none"
						href={`#/category/${item.slug}`}
					>
						{item.name}
					</a>
				</li>
			);
		});
	} else {
		categoriesJSX = (
			<li className="mb-1" key="1">
				<strong className="text-light">Loading...</strong>
			</li>
		);
	}

	return (
		<footer className="pt-md-5 px-5">
			<div className="row px-5">
				<div className="col-12 col-md px-5 ms-5">
					<small className="d-block mb-3 text-muted p-5">
						&copy; 2017–2022
					</small>
				</div>
				<div className="col-6 col-md px-5">
					<h5 className="text-light">Features</h5>
					<ul className="list-unstyled text-small ">
						<li className="mb-1">
							<a className="link-secondary text-decoration-none" href="#">
								Cool stuff
							</a>
						</li>
						<li className="mb-1">
							<a className="link-secondary text-decoration-none" href="#">
								Random feature
							</a>
						</li>
						<li className="mb-1">
							<a className="link-secondary text-decoration-none" href="#">
								Team feature
							</a>
						</li>
						<li className="mb-1">
							<a className="link-secondary text-decoration-none" href="#">
								Stuff for developers
							</a>
						</li>
						<li className="mb-1">
							<a className="link-secondary text-decoration-none" href="#">
								Another one
							</a>
						</li>
						<li className="mb-1">
							<a className="link-secondary text-decoration-none" href="#">
								Last time
							</a>
						</li>
					</ul>
				</div>
				<div className="col-6 col-md px-5">
					<h5 className="text-light">Categories</h5>
					<ul className="list-unstyled text-small">{categoriesJSX}</ul>
				</div>
				<div className="col-6 col-md px-5">
					<h5 className="text-light">About</h5>
					<ul className="list-unstyled text-small">
						<li className="mb-1">
							<a className="link-secondary text-decoration-none" href="#">
								Team
							</a>
						</li>
						<li className="mb-1">
							<a className="link-secondary text-decoration-none" href="#">
								Locations
							</a>
						</li>
						<li className="mb-1">
							<a className="link-secondary text-decoration-none" href="#">
								Privacy
							</a>
						</li>
						<li className="mb-1">
							<a className="link-secondary text-decoration-none" href="#">
								Terms
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
