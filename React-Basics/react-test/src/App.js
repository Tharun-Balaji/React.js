// import logo from './logo.svg';
// import './App.css';
// import Login from './Components/Login/Login';
import React, { useEffect, useReducer, useState } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}


function App() {
  const [state, setState] = useState("");

  // const decrement = () => {
  //   dispatch({ type: 'DECREMENT' });
  //   dispatch({ type: 'DECREMENT' });
  // };

  useEffect( () => {
    const debounce = setTimeout(() => {
      console.log(state)
    }, 500);
      console.log(debounce);
    return () => {
      clearTimeout(debounce);
    };
  }, [state] )

  return (
    <div style={{
      display : "flex",
      flexDirection: "column",
      alignItems : "center",
      justifyContent : "center",
      height : "100vh",
      width : "100vw",
    }} >
      <input 
       value={state}
       onChange={(e) => setState(e.target.value)}
      />
      <p>{state}</p>
    </div>
  );
}

export default App;
