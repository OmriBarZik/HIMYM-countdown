import React from 'react';
import './App.css';
import Countdown from 'react-countdown';


const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <span>
      {days}:{hours}:{minutes}:{seconds}
    </span>
  );
};

function App() {
  return (
    <div>
      <Countdown date={new Date(2020,5,28,10)} renderer={renderer} /> 
    </div>
  );
}

export default App;
