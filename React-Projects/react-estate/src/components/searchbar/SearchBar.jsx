import { useState } from "react";
import "./Searchbar.scss";

const types = ["buy", "rent"];

export default function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0
  });

  const switchType = (val) => { 
    setQuery((prev) => ({ ...prev, type: val}));
  };

  return (
		<div className="searchBar">
      <div className="type">
        {
          types.map((type, index) => (
            <button
              key={index}
              onClick={() => switchType(type)}
              className={query.type === type ? "active" : ""}
            >
              {type}
            </button>
          ))
        }
      </div>
			<form action="">
				<input
					type="text"
					placeholder="City Location"
					name="location"
				/>
				<input
					type="number"
					placeholder="Min Price"
					min={0}
					max={1000000}
					name="minPrice"
				/>
				<input
					type="number"
					placeholder="Max Price"
					min={0}
					max={1000000}
					name="maxPrice"
				/>
				<button>
					<img src="/search.png" alt="search icon" />
				</button>
			</form>
		</div>
  );
}
