// import logo from './logo.svg';
import './App.css';
import Counter from './Components/counter';
import Test from './Components/Test';
// import { useGetAlbumsQuery } from './store/Query';
// import { call } from './store/Query';
import call from './store/Query';

function App() {

  console.log(call);

  const data = call.useGetAlbumsQuery();

  return (
    <div className="App">
      app
      </div>
  );
}

export default App;
