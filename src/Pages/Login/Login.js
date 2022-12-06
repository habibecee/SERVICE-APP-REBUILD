import React, { useState } from "react";
import User from "../../Assets/Image/user2.png";
import UseApi from "../../Hooks/UseApi";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/authSlice";

const Login = (props) => {
	const navigate = useNavigate();
	const api = UseApi();
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLoginClick = () => {
		const postData = {
			email,
			password,
		};

		api
			.post("auth/login", postData)
			.then((response) => {
				console.log(">> TOKEN", response.data.data.token);

				if (response.data.status === "success") {
					localStorage.setItem("token", response.data.data.token);

					dispatch(setToken(response.data.data.token));

					navigate("/");

					setTimeout(() => {
						window.location.reload();
					}, 71);
				} else {
					alert("Hatalı eposta veya şifre girildi.");
				}
			})
			.catch((err) => {
				console.log(">> ERR", err);
				alert(err.response.data.errorMessage);
			});
	};

	return (
		<body className="text-center p-3">
			<main className="form-signin p-3 d-flex flex-column align-items-center justify-content-start">
				<form style={{ minWidth: "600px" }}>
					<img
						className="mb-4"
						src={User}
						alt=""
						style={{
							width: "100px",
							height: "100px",
							borderRadius: "50%",
						}}
					/>
					<h1 className="h3 mb-3 fw-normal">Log In</h1>

					<div className="form-floating mb-5 shadow-lg">
						<input
							type="email"
							className="form-control"
							id="floatingInput"
							placeholder="name@example.com"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label for="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-5 shadow-lg">
						<input
							type="password"
							className="form-control"
							id="floatingPassword"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label for="floatingPassword">Password</label>
					</div>

					<div className="checkbox mb-5">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me
						</label>
					</div>
					<button
						className="w-100 btn btn-lg btn-primary shadow-lg"
						type="submit"
						onClick={onLoginClick}
					>
						Log in
					</button>
					<p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
				</form>
			</main>
		</body>
	);
};

export default Login;
