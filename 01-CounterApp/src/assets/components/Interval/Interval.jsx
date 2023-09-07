import React from "react";
import "./Interval.scss";
import Button from "../Button/Button";
import Screen from "../Screen/Screen";

function Interval({ interval, setInterval }) {
  return (
    <div className="interval">
        
      <h2>Interval</h2>

      <div className="interval-selector">
        <Button
          className="primary all-rounded"
          onClick={() => {
            interval > 1 && setInterval(interval - 1);
          }}
        >
          -
        </Button>
        <Screen>{interval}</Screen>
        <Button
          className="primary all-rounded"
          onClick={() => setInterval(interval + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default Interval;
