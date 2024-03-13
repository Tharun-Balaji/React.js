const API_KEY = "ac94cdc948bd036b13f6b2d8b83c47c8";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (infoType, searchParams) =>{
    const url = new URL(BASE_URL + "/" + infoType );
    url.search = new URLSearchParams({...searchParams,appid:API_KEY});

    return fetch(url)
    .then( (res) => res.json() ) 
    

};

// export default getWeatherData;

function formatCurrentWeather(data){
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      dt,
      sys: { country, sunrise, sunset },
      weather,
      wind: { speed },
    } = data;
    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
      };
}


const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeatherData = await getWeatherData("weather", searchParams).then(formatCurrentWeather);

    const {lat, lon} = formattedCurrentWeatherData;

    return formattedCurrentWeatherData;
};

export default getFormattedWeatherData;

