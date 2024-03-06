
import Home from './components/Home';
import WatchList from './components/WatchList';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
    //   <NavBar />
    //   <Routes>

    //     <Route path = "/" element ={
    //       <Home />
    //     }></Route>

    //     <Route path = "/WatchList" element ={
    //       <WatchList />
    //     }></Route>
    //   </Routes>
    // </BrowserRouter>
    // <Home/>

    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path = "/" element ={
          <Home />
        }></Route>

        <Route path = "/WatchList" element ={
          <WatchList />
        }></Route>
      </Routes>
    
    </BrowserRouter>


  );
}

export default App;
