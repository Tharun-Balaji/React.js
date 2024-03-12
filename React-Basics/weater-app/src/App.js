import "./App.css";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
import TimeandLocation from "./Components/TimeandLocation";
import TopButtons from "./Components/TopButtons";
import Input from "./Components/input";
import Forecast from "./Components/Forecast";


function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />

      <Input />

      <TimeandLocation />

      <TemperatureAndDetails />

      <Forecast title = "Hourly Forecast" />
      <Forecast title = "Daily Forecast " />
    </div>
  );
}

export default App;
