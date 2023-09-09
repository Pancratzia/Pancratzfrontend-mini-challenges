import { useState, useEffect } from "react";
import Accordion from "./components/Accordion/Accordion";
import Checkbox from "./components/Checkbox/Checkbox";

function App() {
  const calculateAge = () => {
    const date = new Date();
    const year = date.getFullYear();
    if (date.getMonth() < 8 || (date.getMonth() === 8 && date.getDate() < 18))
      return year - 1999 - 1;
    else return year - 1999;
  };

  const [list, setList] = useState([
    {
      question: "Who am I?",
      answer: "I am Laura Ortega",
      active: false,
    },
    {
      question: "Where do I live?",
      answer: "I live in Venezuela",
      active: false,
    },
    {
      question: "What is my favorite color?",
      answer: "My favorite color is purple",
      active: false,
    },
    {
      question: "How old am I?",
      answer: "I am " + calculateAge() + " years old",
      active: false,
    },
  ]);

  const [singleAccordion, setSingleAccordion] = useState(false);

  const handleCheckboxToggle = (checked) => {
    setSingleAccordion(checked);
  };

  const handleAccordionToggle = (index) => {
    const newList = singleAccordion
      ? list.map((item, i) => ({ ...item, active: i === index }))
      : [...list].map((item, i) => ({ ...item, active: i === index ? !item.active : item.active }));
    setList(newList);
  };

  useEffect(() => {
    if (singleAccordion) {
      const newList = list.map((item) => ({ ...item, active: false }));
      setList(newList);
    }
  }, [singleAccordion]);

  return (
    <div className="bg-[#f2f2f2] h-screen flex justify-center items-center flex-col">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">Laura Ortega</h1>
        <h2 className="text-2xl mb-5">FullStack Developer</h2>
        <p className="mb-5">Facts About Me</p>
      </div>

      <div className="checkbox mb-5">
        <Checkbox onToggle={handleCheckboxToggle} />
      </div>

      <div className="list">
        {list.map((item, index) => {
          return (
            <Accordion
              key={index}
              datas={item}
              onToggle={() => handleAccordionToggle(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
