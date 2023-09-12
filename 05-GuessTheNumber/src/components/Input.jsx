import React from "react";

function Input(props) {
  const { value, onChange } = props;

  const handleValue = (e) => {
    const inputValue = e.target.value;
    if (inputValue >= 1 && inputValue <= 100) {
      onChange(inputValue);
    } else if (inputValue === "") {
      onChange("");
    }
  };

  return (
    <div className="w-full text-center">
      <input
        type="number"
        className="w-1/2 h-auto p-2 bg-white rounded-md border text-[1.6rem] font-bold"
        value={value}
        min={1}
        max={100}
        onChange={handleValue}
      />
    </div>
  );
}

export default Input;

