import React, { useEffect } from "react";
import "./Counter.scss";
import Screen from "../Screen/Screen";
import Button from "../Button/Button";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [screen, setScreen] = React.useState(0);

  useEffect(() => {
    setScreen(count);
    console.log(count);
  }, [count]);

  return (
    <div className="counter">
      <h1 className="title">counting stars</h1>
      <p className="description">
        {count < 0
          ? "How many starts are dying?"
          : "How many starts do you see?"}
      </p>

      <Screen> {screen} </Screen>

      <div className="buttons">
        <Button onClick={() => setCount(count + 1)} className="primary">
          +
        </Button>
        <Button onClick={() => setCount(0)} className="reset">
          Reset
        </Button>
        <Button onClick={() => setCount(count - 1)} className="secondary">
          -
        </Button>
      </div>
    </div>
  );
}

export default Counter;
