import React from "react";

function Button(props) {
  const { name, onClick } = props;
  return (
    <button className="bg-cyan-200 hover:bg-cyan-200/80 text-black font-bold py-2 px-4 rounded w-[150px] md:w-[100px]" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
