import { Suspense, useState } from "react";
import "./App.css";
import Search from "./Components/Search/Search";
import CurrentWeather from "./Components/current-weather/current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import Forecast from "./Components/forecast/forecast";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [units, setUnits] = useState("metric");

  const handleOnSearchChange = (searchData) => {
    setLoading(true);
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${units}`
    );

    setTimeout(async function () {
      await Promise.all([currentWeatherFetch, forecastFetch])
        .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forcastResponse = await response[1].json();

          setCurrentWeather({ city: searchData.label, ...weatherResponse });
          setForecast({ city: searchData.label, ...forcastResponse });
        })
        .catch(console.log);
      setLoading(false);
    }, 1000);
  };

  console.log(currentWeather);
  console.log(forecast);

  //   if (!currentWeather && !loading) {
  //     return (
  //       <div class="container-a">
  //   <div class="animation-container">
  //     <div class="sun"></div>
  //     <div class="cloud-container">
  //       <div class="cloud"></div>
  //       <div class="cloud"></div>
  //     </div>
  //     <div class="rain-container">
  //       <span class="raindrop"></span>
  //       <span class="raindrop"></span>
  //       <span class="raindrop"></span>
  //       <span class="raindrop"></span>
  //       <span class="raindrop"></span>
  //     </div>
  //     <p class="prompt">Enter your city to get the weather</p>
  //   </div>
  //   <div class="search-container">
  //   <Search onSearchChange={handleOnSearchChange} />
  //   </div>
  //   <div id="weather-info"></div>
  // </div>
  //     );
  //   }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} units = {units} setUnits = {setUnits} />
      {loading && (
        <div className="loading-container">
          (<div className="loading-ball"></div>)
        </div>
      )}

      {!loading && currentWeather && <CurrentWeather data={currentWeather} />}
      {!loading && forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
