
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import WatchList from './Components/WatchList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <h1 class="text-3xl font-bold underline">
    //   Hello world!
    // </h1>

    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/watchlist" element={<WatchList />} ></Route>
        </Routes>
    </BrowserRouter>
        
  );
}

export default App;
