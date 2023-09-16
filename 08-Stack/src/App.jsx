import { useState } from "react";


const Button = ({ children, handleClick }) => {
  return (
    <button className="bg-violet-700 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
      {children}
    </button>
  )
}


function App() {

  const [array, setArray] = useState([]);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  const handleReset = () => {
    setValue("");
    setMessage("");
    setArray([]);
  }

  const isEmpty = () => {
    array.length === 0 ? setMessage("Array is empty") : setMessage("Array is not empty");
  }

  const handleSize = () => {
    array.length === 0 ? setMessage("Array is empty") : setMessage("Array size is " + array.length);
  }

  const handlePush = () => {
    if (value === "") { return; };
    if (array.length > 9) {
      setMessage("Array is full");
      return
    };
    setArray([...array, value]);
    setValue("");
  }

  const handlePop = () => {
    if (array.length === 0) { setMessage("Array is empty"); return; };;
    setArray(array.slice(0, -1));
  }

  const handlePeek = () => {
    if (array.length === 0) { setMessage("Array is empty"); return; };
    setMessage(`Array peek is ${array[array.length - 1]}`);
  }

  const handleFull = () => {
    array.length > 9 ? setMessage("Array is full") : setMessage("Array is not full");
  }

  return (
    <main className="h-screen w-screen flex-col justify-center items-center bg-gradient-to-t from-blue-200 to-violet-400">

        <h2 className="text-3xl font-bold text-white w-[90%] text-center my-0 mx-auto pt-5">
          Hi! Let's see what we can do with React and Arrays using Tailwind CSS
        </h2>

        <div className="w-[80%] lg:w-[70%] xl:w-[50%] my-5 mx-auto">
          <input type="text" className="bg-white text-black font-bold py-2 px-4 rounded-xl w-full focus:outline-none" placeholder="Enter an element..." value={value} onChange={(e) => setValue(e.target.value)} />
        </div>

        <div className="w-[80%] lg:w-[70%] xl:w-[50%] my-5 mx-auto flex flex-col md:flex-row gap-2 md:justify-between">
          <Button handleClick={handlePush}>Push</Button>
          <Button handleClick={handlePop}>Pop</Button>
          <Button handleClick={handlePeek}>Peek</Button>
          <Button handleClick={isEmpty}>Empty?</Button>
          <Button handleClick={handleFull}>Full?</Button>
          <Button handleClick={handleSize}>Size</Button>
          <Button handleClick={handleReset}>Reset</Button>
        </div>

        <p className="text-xl font-bold text-white w-[90%] text-center my-0 mx-auto pt-5">
          {message}
        </p>

        <div className="w-[80%] lg:w-[70%] xl:w-[50%] my-5 mx-auto min-h-[20px] bg-white rounded-lg p-3 flex flex-col justify-center items-center">
          {
            array.map((item, index) => {
              return <p key={index}>{item}</p>
            })
          }
        </div>

    </main>
  );
}

export default App;
