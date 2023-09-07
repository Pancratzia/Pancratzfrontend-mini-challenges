import React, { useEffect, useState } from "react";
import "./Counter.scss";
import Screen from "../Screen/Screen";
import Button from "../Button/Button";
import Interval from "../Interval/Interval";

function Counter() {
  const [count, setCount] = useState(0);
  const [screen, setScreen] = useState(0);
  const [interval, setInterval] = useState(1);

  useEffect(() => {
    setScreen(count);
  }, [count]);

  return (
    <div className="counter">
      <div className="text">
        <h1 className="title">counting stars</h1>
        <p className="description">
          {count < 0
            ? "How many starts are dying?"
            : "How many starts do you see?"}
        </p>
      </div>
      <Screen className="principal"> {screen} </Screen>

      <div className="buttons">
        <Button
          onClick={() => setCount(count - interval)}
          className="secondary"
        >
          -
        </Button>
        <Button onClick={() => setCount(0)} className="reset">
          Reset
        </Button>
        <Button onClick={() => setCount(count + interval)} className="primary">
          +
        </Button>
      </div>

      <Interval interval={interval} setInterval={setInterval} />
    </div>
  );
}

export default Counter;
