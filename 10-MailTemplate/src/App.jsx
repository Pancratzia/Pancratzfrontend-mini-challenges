import { useEffect } from "react";
import { useState } from "react";

const OPTIONS = [
  {
    name: "Resignation",
    inputs: ["Name", "Position", "Company", "Date", "Reason"],
  },
  {
    name: "Welcome",
    inputs: ["Name", "Company", "Position", "Sender", "SenderPosition"],
  },
  {
    name: "Promotion",
    inputs: ["Name", "Position", "Company", "PastPosition", "NewPosition"],
  },
  {
    name: "Love Letter",
    inputs: ["SenderName", "RecipientName", "Petname"],
  },
];

const DropDown = ({ options, handleChange }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label
        className="text-gray-700 font-bold uppercase text-lg px-1"
        htmlFor="templateOptions"
      >
        Templates:
      </label>
      <select
        className="text-gray-700 uppercase outline-none py-1 w-full border-b-2 cursor-pointer"
        name="templateOptions"
        id="templateOptions"
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={index}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const Input = ({ inputs }) => {
  return (
    <div>
      {inputs.map((input) => (
        <div key={input}>{input}</div>
      ))}
    </div>
  );
};

function App() {  
  const [templateID, setTemplateID] = useState(0);

  const handleDropDownChange = (e) => {
    setTemplateID(e.target.value);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-t from-gray-900 to-gray-700">
      <div className="bg-white w-[90%] h-[90%] max-w-[1200px] p-3">
        <h1 className="text-4xl font-bold text-center uppercase pb-3 text-gray-700">
          Mail Template Creator
        </h1>
        <h2 className="text-2xl text-center text-gray-500 pb-3 border-b-2">
          Made By{" "}
          <a
            href="https://github.com/Pancratzia"
            target="_blank"
            rel="noreferrer"
            className="font-bold"
          >
            Pancratzia
          </a>
        </h2>

        <div className="pt-2 pb-8 w-[90%] my-0 mx-auto">
          <DropDown options={OPTIONS} handleChange={handleDropDownChange} />
        </div>

        <div>
          <Input inputs={OPTIONS[templateID].inputs} />
        </div>

        <div>Template Email</div>
      </div>
    </div>
  );
}

export default App;
