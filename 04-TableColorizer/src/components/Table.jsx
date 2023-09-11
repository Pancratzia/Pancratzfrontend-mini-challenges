import React from "react";

function Table() {

    const randomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

  return (
    <div className="w-full h-full border-2 border-cyan-200 rounded-md grid grid-cols-3  justify-items-center">

      {[...Array(9)].map((_, index) => (
        <div className="border border-cyan-200 w-full flex justify-center items-center bg-white" key={index}>{index + 1}</div>
      ))}
    </div>
  );
}

export default Table;
