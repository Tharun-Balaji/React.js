import { useSelector } from 'react-redux';
import './App.css';
import Auth from './components/auth/Auth';
import Layout from './components/layout/Layout';
import { useEffect } from 'react';
import Notification from './components/notification/Notification';

function App() {

  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {

    const sendRequest = async () => { 

      const res = await fetch("https://redux-http-b0a0d-default-rtdb.firebaseio.com/cartItems.json", {
        method: "PUT",
        body: JSON.stringify(cart.itemsList),
      });

      const data = await res.json();
    };

    sendRequest();
  },[cart])

  return (
    <div className="App">
      <Notification type="success" message="Item added to cart" />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
