import React from "react";

function Button(props) {
  const { name, onClick, color } = props;
  return (
    <button className="hover:opacity-75 text-black font-bold py-2 px-4 rounded w-[150px] md:w-[100px]" onClick={onClick} style={{ backgroundColor: color }} >
      {name}
    </button>
  );
}

export default Button;
