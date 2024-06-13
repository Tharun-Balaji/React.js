import "./HomePage.scss";
import SearchBar from "./../../components/searchbar/SearchBar";

export default function HomePage() {
	return (
		<div className="homepage">
			<div className="textContainer">
				<div className="wrapper">
					<h1 className="title">
						Find Real Estate & Get your Dream Place
					</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Vitae amet quaerat explicabo iste, aperiam
						distinctio culpa sapiente adipisci, non quos qui esse,
						voluptatum eius repellat tempore deserunt. Tenetur,
						repudiandae reprehenderit?
					</p>
					<SearchBar />
					<div className="boxes">
						<div className="box">
							<h1>16+</h1>
							<h2>Years of Experience</h2>
						</div>
						<div className="box">
							<h1>200</h1>
							<h2>Awards Gained</h2>
						</div>
						<div className="box">
							<h1>2000+</h1>
							<h2>Property Ready</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="imageContainer">
				<img src="/bg.png" alt="" />
			</div>
		</div>
	);
}
