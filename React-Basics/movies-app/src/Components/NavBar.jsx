import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
		<div className="flex py-2">
			<img
				className="h-5 mx-3"
				src="/movie.png"
				alt="movie-icon"
			/>
			<Link to="/" className="font-bold text-sky-500	mx-2">
				Movies
			</Link>
			<Link to="./WatchList" className="font-bold text-sky-500 mx-2">
				WatchList
			</Link>
		</div>
  );
}

export default NavBar