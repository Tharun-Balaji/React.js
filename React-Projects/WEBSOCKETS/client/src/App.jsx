import { useEffect, useState } from 'react';
import './App.css';
import io  from 'socket.io-client';
import Input from './components/Input';

function App() {
  const [score, setScore] = useState({});
  const [scores, setAllScores] = useState([]);
  const socket = io.connect('http://localhost:3000/');

  function connectSocket(){
    socket.on("connection", (socket) => {
      console.log(socket);
    })
  }

  useEffect( () => {
    connectSocket();
  },[]);

  function handleInput(e){
    const {name,value} = e.target;
    const currObj = {[name] : value};
    setScore({...score,...currObj});
  }

  function sendScores(){
    console.log(score);
    socket.emit("scores", score);

    socket.on("playerScores", (playerScores) => {
      setAllScores(playerScores);
    })
  }
  // console.log(score);

  return (
    <>
      <h1>React MultiPlayer DashBoard</h1>
      <Input
        placeholder={"Enter Your Name"}
        name={"name"}
        handleInput={handleInput}
      />
      <Input
        placeholder={"Enter Your Score"}
        name={"score"}
        handleInput={handleInput}
      />
      <button className="send-scores" onClick={sendScores}>
        {" "}
        publish Scores
      </button>

      {scores.length ? (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>

            {scores.map(function (score, idx) {
              if (score.name && score.score) {
                return (
                  <tr key={idx}>
                    <td>{score?.name}</td>
                    <td>{score?.score}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      ) : null}
    </>
  );
}

export default App
