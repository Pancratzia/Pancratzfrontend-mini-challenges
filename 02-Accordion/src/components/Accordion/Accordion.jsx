import React from "react";

function Accordion(props) {
  const { datas, onToggle } = props;

  const handleToggleActivate = () => {
    onToggle();
  };

  return (
    <div
      className={`bg-[#e9e9e9] p-5 mb-5 border border-[#c9c6c655] rounded-md w-[280px] duration-500 h-auto group ${
        datas.active ? "is-active bg-white" : ""
      }`}
    >
      <div className="flex items-center">
        <div className="w-full group-[.is-active]:font-bold duration-500">
          {datas.question}
        </div>
        <div
          className="text-xl rotate-90 group-[.is-active]:rotate-[270deg] hover:cursor-pointer duration-500"
          onClick={handleToggleActivate}
        >
          {">"}
        </div>
      </div>

      <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] duration-500">
        {datas.answer}
      </div>
    </div>
  );
}

export default Accordion;



