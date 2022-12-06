import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../Redux/authSlice";
import { removeAppData } from "../../Redux/appDataSlice";

const Header = (props) => {
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const appDataState = useSelector((state) => state.appData);

	console.log("HEADER APP DATA", appDataState);

	return (
		<header>
			<div className="px-3 py-3 bg-dark text-white mb-3">
				<div className="container">
					<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
						<a
							href="/"
							className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
						>
							<i
								id="logoHeader"
								className="fa-solid fa-hands-holding-child"
								style={{
									fontSize: "64px",
								}}
							></i>
						</a>

						<ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0">
							<li>
								<a href="/#" className="nav-link text-secondary">
									<i
										className="fa-solid fa-house"
										style={{ fontSize: "24px", color: "green" }}
									></i>
									<span className="ms-2" style={{ fontSize: "24px" }}>
										Home{" "}
									</span>
								</a>
							</li>
							<li>
								<a href="#/blogs" className="nav-link text-secondary">
									<i
										className="fa-solid fa-umbrella"
										style={{ fontSize: "24px", color: "pink" }}
									></i>
									<span className="ms-2" style={{ fontSize: "24px" }}>
										Blogs{" "}
									</span>
								</a>
							</li>
							<li>
								<a href="#/categories" className="nav-link text-secondary">
									<i
										className="fa-solid fa-brush"
										style={{ fontSize: "24px", color: "purple" }}
									></i>
									<span className="ms-2" style={{ fontSize: "24px" }}>
										Categories{" "}
									</span>
								</a>
							</li>
						</ul>

						{appDataState ? (
							<ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0">
								<li>
									<a href="#" className="nav-link text-secondary">
										<i
											class="fa-solid fa-user-astronaut"
											style={{ fontSize: "24px", color: "yellow" }}
										></i>
										{/* <i
												className="fa-solid fa-person-circle-check"
												style={{ fontSize: "24px", color: "yellow" }}
											></i> */}
										<span className="ms-2" style={{ fontSize: "24px" }}>
											{appDataState.fullname}
										</span>
									</a>
								</li>
								&nbsp;
								<li>
									<button
										className="btn nav-link text-secondary"
										onClick={(event) => {
											dispatch(removeToken());
											dispatch(removeAppData());
										}}
									>
										<i
											class="fa-solid fa-person-walking-arrow-right"
											style={{ fontSize: "24px", color: "blue" }}
										></i>
										{/* <i
												className="fa-solid fa-person-circle-plus"
												style={{ fontSize: "24px", color: "blue" }}
											></i> */}
										<span className="ms-2" style={{ fontSize: "24px" }}>
											Log Out
										</span>
									</button>
								</li>
							</ul>
						) : (
							<ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0">
								<li>
									<a href="#/login" className="nav-link text-secondary">
										<i
											className="fa-solid fa-person-circle-check"
											style={{ fontSize: "24px", color: "yellow" }}
										></i>
										<span className="ms-2" style={{ fontSize: "24px" }}>
											Log In
										</span>
									</a>
								</li>
								<li>
									<a href="#/register" className="nav-link text-secondary">
										<i
											className="fa-solid fa-person-circle-plus"
											style={{ fontSize: "24px", color: "blue" }}
										></i>
										<span className="ms-2" style={{ fontSize: "24px" }}>
											Register
										</span>
									</a>
								</li>
							</ul>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
