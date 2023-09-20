import { useState } from "react";

const EMAIL_TEMPLATES = [
  {
    name: "Resignation",
    inputs: ["Name", "ReceiverName", "Position", "Company", "LastWorkingDay",  "Appreciation"],
    message: `Dear {ReceiverName},
  
  I, {Name}, am writing to formally announce my resignation from the position of {Position} at {Company}. My last working day will be {LastWorkingDay}.
  
  I want to express my heartfelt appreciation for the opportunities I have had during my tenure at {Company}. Working here has been an enriching experience, and I'm grateful for the support and guidance I've received from you and the entire team.
  
  I am committed to ensuring a smooth transition during my notice period. If there are specific tasks or responsibilities you would like me to focus on during this time, please let me know.
  
  Once again, thank you for everything.
  
  Sincerely,
  {Name}.`,
  }
  
  ,
  {
    name: "Welcome",
    inputs: ["Name", "Company", "Position", "Sender", "SenderPosition"],
    message: `Dear {Name},

I am delighted to welcome you to {Company} as our new {Position}. Your skills and expertise will undoubtedly be a valuable addition to our team, and we are excited to have you on board.

{Sender}, {SenderPosition}, and the entire team look forward to working with you to achieve our shared goals.

If you have any questions or need assistance as you settle in, please do not hesitate to reach out.

Once again, welcome to the {Company} family!

Best regards,
{Sender}`,
  },
  {
    name: "Promotion",
    inputs: ["Name", "Company", "PastPosition", "NewPosition"],
    message: `Dear {Name},

Congratulations on your well-deserved promotion to {NewPosition} at {Company}! Your hard work, dedication, and exceptional performance have not gone unnoticed, and this achievement is a testament to your capabilities.

From your previous role as {PastPosition}, you have consistently demonstrated your commitment to excellence, and we have no doubt that you will excel in your new role.

We look forward to seeing the positive impact you will continue to make at {Company}.

Warm regards,
{Company}`,
  },
  {
    name: "Love Letter",
    inputs: ["SenderName", "RecipientName", "Petname"],
    message: `My Dearest {RecipientName},

I wanted to take a moment to express the depth of my feelings for you. {Petname}, you mean the world to me, and every day with you is a day filled with joy and love.

Your smile brightens my darkest days, and your presence in my life is a blessing I cherish beyond words. I love you more than words can convey, and I want you to know that my love for you only grows stronger with each passing moment.

Thank you for being the incredible person that you are and for sharing your life with me. I look forward to creating countless beautiful memories together.

All my love,
{SenderName}.`,
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

const Input = ({ inputs, values, handleChange }) => {
  return (
    <>
      {inputs.map((input, index) => (
        <div key={index} className="flex flex-col py-1">
          <label htmlFor={input} className="text-gray-700 font-bold pb-1">
            {input + ":"}
          </label>
          <input
            key={index}
            type="text"
            name={input}
            placeholder={`${input}...`}
            value={values[index]}
            onChange={(e) => handleChange(e, index)}
            className="outline-none w-full border-b-2"
          />
        </div>
      ))}
    </>
  );
};

const TemplateEmail = ({ template, values }) => {
  const { name, message } = template;

  if (!name || !message) return null;

  const pairTemplateInputsWithValues = template.inputs.map((input, index) => {
    return { input, value: values[index] };
  });

  const messageReplacedWithValues = message.replace(
    /\{(\w+)\}/g,
    (match, input) => {
      return pairTemplateInputsWithValues.find((pair) => pair.input === input)
        .value;
    }
  );

  const messageWithLineBreaks = messageReplacedWithValues.replace(
    /\n/g,
    '<br>'
  );

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-gray-700">{name}</h2>
      <p
        className="text-gray-500 p-2 text-center"
        dangerouslySetInnerHTML={{ __html: messageWithLineBreaks }}
      />
    </>
  );
};


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
