import "./layout.scss";
import Navbar from "./components/NavBar/Navbar.jsx";
import HomePage from "./routes/homepage/HomePage";

function App() {
	return (
		<div className="layout">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="content">
				<HomePage />
			</div>
		</div>
	);
}

export default App;
