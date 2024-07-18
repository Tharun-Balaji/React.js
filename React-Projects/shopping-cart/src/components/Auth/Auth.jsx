import "./Auth.css";

const Auth = () => {
	return (
		<div className="container">
			<h1>Login</h1>{" "}
			<form>
				<label htmlFor="id">Id</label>
				<input type="text" name="id" id="id" autoComplete = "username" />
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					autoComplete="new-password"
				/>
				<button className="login-btn" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default Auth;
