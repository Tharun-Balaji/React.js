
import './App.css';
import Search from './Components/Search/Search';

function App() {


  function handleOnSearchChange(searchData) {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
