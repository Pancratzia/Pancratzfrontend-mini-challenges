import { useEffect } from "react";
import { useState } from "react";

const OPTIONS = [
  {
    name: "Resignation",
    inputs: ["Name", "Position", "Company", "Date", "Reason"],
    message: ``,
  },
  {
    name: "Welcome",
    inputs: ["Name", "Company", "Position", "Sender", "SenderPosition"],
    message: ``,
  },
  {
    name: "Promotion",
    inputs: ["Name", "Position", "Company", "PastPosition", "NewPosition"],
    message: ``,
  },
  {
    name: "Love Letter",
    inputs: ["SenderName", "RecipientName", "Petname"],
    message: `Dear {RecipientName}, I love you {Petname}. I'm writing this letter to tell you how much I love you. - All the love, {SenderName}.`,
  },];

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

const Input = ({ inputs, values }) => {

  return (
    <>
      {inputs.map((input, index) => (
        <div key={index} className="flex flex-col py-1">
          <label htmlFor={input} className="text-gray-700 font-bold pb-1">{input + ":"}</label>
          <input key={index} type="text" name={input} className="outline-none w-full border-b-2" />
        </div>
      ))}
    </>
  );
};

const TemplateEmail = ({template}) => {
  
  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-700" >{template.name}</h2>
      <p className="text-gray-500 p-2">{template.message}</p>
    </>
  );

}

function App() {  
  const [templateID, setTemplateID] = useState(0);


  const handleDropDownChange = (e) => {
    setTemplateID(e.target.value);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-t from-gray-900 to-gray-700">
      <div className="bg-white w-[90%] h-[90%] max-w-[1200px] p-3 overflow-y-auto">
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

        <div className="pt-2 pb-8 w-[90%] my-0 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Input inputs={OPTIONS[templateID].inputs} />
        </div>

        <div>

        </div>

        <div className="pt-2 pb-8 w-[90%] my-0 mx-auto border-2 rounded-lg">
          <TemplateEmail template={OPTIONS[templateID]} />
        </div>
      </div>
    </div>
  );
}

export default App;
