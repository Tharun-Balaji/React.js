import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../api";
import "./Search.css"


const Search = ( {onSearchChange} ) => {

    const [search, setSearch] = useState(null);

    function handleOnChange(searchData){
        setSearch(searchData);
        onSearchChange(searchData);
    }

    async function loadOptions(inputValue){
        return fetch(
          `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
          geoApiOptions
        )
          .then((response) => response.json())
          .then((response) => {
            return {
              options: response.data.map((city) => {
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          });
      };
  

    return (
      <div className="search-container" >
      <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="city-input"
      />
      <button className="btn" >°C</button>
      </div>
    );
};

export default Search;