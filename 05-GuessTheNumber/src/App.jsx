import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Result from "./components/Result";

function App() {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
  };

  const resetGame = () => {
    setWinner(false);
    setMessage("");
    setValue("1");
    setRandomNumber(generateRandomNumber());
  };

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [winner, setWinner] = useState(false);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (randomNumber === Number(value)) {
      setWinner(true);
      setMessage("You win!");
      setTimeout(() => {
        resetGame();
      }, 2000);
    } else {
      randomNumber > Number(value)
        ? setMessage("Too Low")
        : setMessage("Too High");
    }
  };

  const handleReset = () => {
    resetGame();
  };

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <div className="w-screen h-screen bg-violet-100 flex justify-center items-center">
      <div className="w-[90%] h-[90%] bg-white rounded-md p-5">
        <h1 className="text-[3rem] uppercase font-bold text-center">
          Guess the number!
        </h1>
        <p className="text-center py-5">Guess a number between 1 and 100:</p>

        <div className="flex justify-center content-center py-5 flex-col">
          <Input value={value} onChange={setValue} />
          <Button onClick={handleSubmit} />
          <Button text="Try again!" onClick={handleReset} />
          <Result
            winner={winner}
            message={message}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
