import React from "react";
import "./Login.css";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import gLogo from "../../img/google-logo.png";
import UseAuth from "../../Hooks/UseAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
	const { googleLogin, user } = UseAuth();
	const location = useLocation();
	const redirect_uri = location.state?.from || "/";
	const history = useHistory();
	console.log("came from ", location.state?.from);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	// Google login handle with redirect path
	const handleGoogleLogin = () => {
		googleLogin().then((result) => {
			history.push(redirect_uri);
		});
	};
	return (
		<Container>
			<form
				className="d-flex flex-column p-3 my-5 w-sm-100 w-50 mx-auto login-form  shadow"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className="text-center">Register here</h2>
				<input placeholder="Name" {...register("name")} />
				<input
					placeholder="Email"
					{...register("email", { required: true })}
				/>
				<input
					placeholder="Password"
					{...register("pass", { required: true })}
				/>
				{errors.exampleRequired && <span>This field is required</span>}
				<input
					className="register-btn mx-auto"
					type="submit"
					value="Register"
				/>
				<p className="text-muted text-center">Or login with</p>
				<button
					onClick={handleGoogleLogin}
					className="google-btn mx-auto mb-3 p-1 rounded "
				>
					{" "}
					<div className="d-flex align-items-center me-3">
						<img
							src={gLogo}
							width="45"
							className="bg-light p-2 rounded me-3"
							alt=""
						/>{" "}
						Sign in With Google
					</div>
				</button>
			</form>
		</Container>
	);
};

export default Login;
