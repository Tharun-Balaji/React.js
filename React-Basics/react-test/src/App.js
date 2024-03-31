import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import React, { useReducer } from 'react';

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
  const [state, dispatch] = useReducer(reducer, initialState);

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={decrement}>Decrement Twice</button>
    </>
  );
}

export default App;
