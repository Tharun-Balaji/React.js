
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
