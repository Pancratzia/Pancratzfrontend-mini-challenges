import React from "react";

function Table({ colors }) {
  return (
    <div className="w-full h-full border-2 border-cyan-200 rounded-md grid grid-cols-3  justify-items-center">
      {colors.map((color, index) => (
        <div
          className="border border-cyan-200 w-full flex justify-center items-center bg-white"
          key={index}
          style={{ backgroundColor: color }} 
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default Table;

