import React from 'react';
import './App.css';
import Countdown from 'react-countdown';


const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return (
      <div className="completed">it's time!</div>
    );
  } else {
    return (
      <div>
        <div className="countdown">{days}  : {hours}  : {minutes}  : {seconds}</div>
        <div className="countdown-text">days : hours : minutes : seconds</div>
      </div>
    );
  }
};

const tick = (event) => {
  //console.log(event);
}

function App() {
  return (
    <div className="container">
      <Countdown date={new Date(2020, 5, 28, 10)} onTick={tick} renderer={renderer} />
    </div>
  );
}

export default App;
