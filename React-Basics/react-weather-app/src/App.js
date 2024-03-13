
import './App.css';
import Search from './Components/Search/Search';
import CurrentWeather from './Components/current-weather/current-weather';

function App() {


  function handleOnSearchChange(searchData) {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
