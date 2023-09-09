import { useState } from "react";
import Accordion from "./components/Accordion/Accordion";

function App() {

  const calculateAge = () =>{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();


    if(month < 8 || month === 8 && day < 18) return year - 1999 +1;
    else return year - 1999;
  }

  const [list, setList] = useState([
    {
      question: "Who am I?",
      answer: "I am Laura Ortega",
    },
    {
      question: "Where do I live?",
      answer: "I live in Venezuela",
    },
    {
      question: "What is my favorite color?",
      answer: "My favorite color is purple",
    },
    {
      question: "How old am I?",
      answer: "I am " + calculateAge() + " years old",
    }
  ]);

  return (
    <div className="bg-[#f2f2f2] h-screen flex justify-center items-center">
      <div className="list">
        {/* <Accordion /> */}

        {
          list.map((item, index) => {
            return <Accordion key={index} datas={item} />
          })
        }

        {/* <Accordion /> */}
      </div>
    </div>
  );
}

export default App;
