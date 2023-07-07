import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useCountdown } from "react-countdown-circle-timer";
import { BsSkipStart } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import axios from "axios";
import "./App.css";

const App = () => {
  const [val, setVal] = useState(15);

  return (
    <div className="parent">
      <CountdownCircleTimer
        isPlaying
        duration={val}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => {
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime % 60;

          return `${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`;
        }}
      </CountdownCircleTimer>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
        }}
      >
        <button
          onClick={() => setVal((v) => v + 10)}
          style={{ marginRight: "4rem" }}
          className="button-11"
        >
          <IoMdAdd style={{ marginRight: "4px" }} /> 10 sec
        </button>
        <button className="button-11" onClick={() => setVal(0)}>
          <BsSkipStart style={{ marginRight: "4px" }} /> skip
        </button>
      </div>
    </div>
  );
};

export default App;
