import React from 'react';
import './App.css';
import Countdown from 'react-countdown';


const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <div>
      <span className="countdown">
        {days}  : {hours}  : {minutes}  : {seconds}
      </span><br />
      <span className="countdown-text">days : hours : minutes : seconds</span>
    </div>
  );
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
