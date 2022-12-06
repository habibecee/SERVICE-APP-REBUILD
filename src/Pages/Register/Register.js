import React from "react";
import User from "../../Assets/Image/user2.png";

const Register = (props) => {
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
					<h1 className="h3 mb-3 fw-normal"> Register Now</h1>

					<div className="form-floating mb-4 shadow-lg">
						<input
							type="text"
							className="form-control"
							id="floatingInput"
							placeholder="First Name"
						/>
						<label for="floatingInput"> First Name</label>
					</div>
					<div className="form-floating mb-4 shadow-lg">
						<input
							type="text"
							className="form-control"
							id="floatingInput"
							placeholder="Last Name"
						/>
						<label for="floatingInput"> Last Name </label>
					</div>

					<div className="form-floating mb-4 shadow-lg">
						<input
							type="email"
							className="form-control"
							id="floatingInput"
							placeholder="name@example.com"
						/>
						<label for="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-4 shadow-lg">
						<input
							type="password"
							className="form-control"
							id="floatingPassword"
							placeholder="Password"
						/>
						<label for="floatingPassword">Password</label>
					</div>

					<div className="checkbox mb-4">
						<label>
							<input type="checkbox" value="remember-me" /> Subscribe To Mail
							List
						</label>
					</div>
					<button
						className="w-100 btn btn-lg btn-primary shadow-lg"
						type="submit"
					>
						Register
					</button>
					<p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
				</form>
			</main>
		</body>
	);
};

export default Register;
