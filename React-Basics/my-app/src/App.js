// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
      <Header />
      <UserProfile name="Mahendra" age="25" place="Delhi" />
      <UserProfile name="Deepak" age="No idea" place="BLR" />
      <UserProfile name="Vinay" age="30" place="Tamil Nadu" />
      <Footer />
      <Footer />
    </>
  );
}

// export function AnotherApp() {
//   return (
//     <p>I am a para</p>
//   );
// };



export default App;
