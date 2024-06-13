import "./navbar.scss";
import { useState } from "react";

export default function Navbar() {

	const [open, setOpen] = useState(false)

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
				<a href="" className="login">
					Sign in
				</a>
				<a href="" className="register">
					Sign Up
				</a>
				<div className="menuIcon">
					<img src="/menu.png" alt="menuIcon" onClick={() => setOpen((prev) => !prev)} />
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
