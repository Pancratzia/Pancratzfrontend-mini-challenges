import { useState } from "react";
import { EMAIL_TEMPLATES } from "./constants/Constants";
import { DropDown } from "./components/DropDown";
import { Input } from "./components/Input";
import { TemplateEmail } from "./components/TemplateEmail";

function App() {
  const [templateID, setTemplateID] = useState(0);
  const [values, setValues] = useState(
    Array(EMAIL_TEMPLATES[0].inputs.length).fill("")
  );

  const handleDropDownChange = (e) => {
    setValues(Array(EMAIL_TEMPLATES[e.target.value].inputs.length).fill(""));
    setTemplateID(e.target.value);
  };

  const handleValueChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-t from-gray-900 to-gray-700">
      <div className="bg-white w-[90%] h-[90%] max-w-[1200px] p-3 overflow-y-auto rounded-xl">
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
          <DropDown
            options={EMAIL_TEMPLATES}
            handleChange={handleDropDownChange}
          />
        </div>

        <div className="pt-2 pb-8 w-[90%] my-0 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Input
            inputs={EMAIL_TEMPLATES[templateID].inputs}
            values={values}
            handleChange={handleValueChange}
          />
        </div>

        <div></div>

        <div className="pt-2 pb-8 w-[90%] my-0 mx-auto border-2 rounded-lg">
          <TemplateEmail
            template={EMAIL_TEMPLATES[templateID]}
            values={values}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
