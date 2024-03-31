import './App.css';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav className='navbar' >
        <NavBar/>
      </nav>
      <main className='main' >

      </main>
      <footer className='footer' >

      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
