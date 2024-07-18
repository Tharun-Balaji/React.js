import { useSelector } from 'react-redux';
import './App.css';
import Auth from './components/auth/Auth';
import Layout from './components/layout/Layout';

function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
