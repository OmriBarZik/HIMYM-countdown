import React from "react";
import "./App.css";
import Countdown from "react-countdown";

const addLeadingZero = (num) => (num.toString().length < 2 ? `0${num}` : num);

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <div className="completed">it's time!</div>;
  } else {
    return (
      <div className="countdown-grid">
        <span>{addLeadingZero(days)}</span>
        <span>:</span>
        <span>{addLeadingZero(hours)}</span>
        <span>:</span>
        <span>{addLeadingZero(minutes)}</span>
        <span>:</span>
        <span>{addLeadingZero(seconds)}</span>
        <span className="text">days</span>
        <span className="text">:</span>
        <span className="text">hours</span>
        <span className="text">:</span>
        <span className="text">minutes</span>
        <span className="text">:</span>
        <span className="text">seconds</span>
      </div>
    );
  }
};

/**
 * @returns {{date: Date, err: Error[]}}
 */
const getDateFromPrams = () => {
  const search = new URLSearchParams(window.location.search);

  const now = new Date(Date.now());

  const err = [];

  const params = {
    year: now.getFullYear(),
    month: now.getMonth(),
    date: now.getDate(),
    hours: now.getHours() + 1,
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };

  for (const key in params) {
    if (!Object.hasOwnProperty.call(params, key)) {
      continue;
    }

    if (!search.get(key)) {
      continue;
    }

    if (isNaN(search.get(key))) {
      err.push(new Error(`${key} must be an integer!`));
      continue;
    }

    params[key] = Number.parseInt(search.get(key));
  }

  const date = new Date(
    params.year,
    params.month,
    params.date,
    params.hours,
    params.minutes,
    params.seconds
  );

  return { date, err };
};

function App() {
  const { date, err } = getDateFromPrams();

  const errDiv = err.map((err, i) => (
    <div
      key={i}
      style={{
        border: "1px solid black",
        fontSize: "1.5em",
        width: "100vw",
        backgroundColor: "#dc3545",
        height: "30px",
        left: 0,
        top: `${i * 30}px`,
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {err.message}
    </div>
  ));

  return (
    <div>
      {errDiv}
      <div className="container">
        <Countdown date={date} renderer={renderer} />
      </div>
    </div>
  );
}

export default App;
