import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

	const [open, setOpen] = useState(false)

	const user = true;

    return (
		<nav>
			<div className="left">
				<a className="logo" href="/">
					<img src="./logo.png" alt="logo" />
					<span>LamaEstate</span>
				</a>
				<a href="">Home</a>
				<a href="">About</a>
				<a href="">Contacts</a>
				<a href="">Agents</a>
			</div>
			<div className="right">
				{user ? (
					<div className="user">
						<img
							src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
						/>
						<span>John Doe</span>
						<Link to="/profile" className="profile">
							<div className="notification">3</div>
							<span>Profile</span>
						</Link>
					</div>
				) : (
					<>
						<a href="/">Sign in</a>
						<a href="/" className="register">
							Sign up
						</a>
					</>
				)}
				<div className="menuIcon">
					<img
						src="/menu.png"
						alt="menuIcon"
						onClick={() => setOpen((prev) => !prev)}
					/>
				</div>
				<div className={open ? "menu active" : "menu"}>
					<a href="">Home</a>
					<a href="">About</a>
					<a href="">Contacts</a>
					<a href="">Agents</a>
					<a href="">Sign in</a>
					<a href="">Sign Up</a>
				</div>
			</div>
		</nav>
	);
}
