// import logo from './logo.svg';
// import './App.css';
// import Login from './Components/Login/Login';
import React, { useEffect, useReducer, useState } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prev) => ++prev);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);

  function handleClick(e) {
    e.preventDefault();
    setTime(0);
  }

  function Time_formatter(time) {
    return time < 9 ? `0${time}` : `${time}`;
  }

  return (
    <div>
      <p>{`${Time_formatter(min)} : ${Time_formatter(sec)}`}</p>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
