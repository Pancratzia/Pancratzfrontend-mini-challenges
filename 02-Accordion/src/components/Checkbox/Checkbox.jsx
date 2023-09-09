import React, { useState } from "react";

function Checkbox({ onToggle }) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onToggle(newChecked);
  };

  return (
    <div className="flex items-center pl-4 border border-[#c9c6c655] rounded dark:border-gray-700 w-[280px] bg-white">
      <input
        id="bordered-checkbox-2"
        type="checkbox"
        value=""
        name="bordered-checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={checked}
        onChange={handleToggle}
      />
      <label
        htmlFor="bordered-checkbox-2"
        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Open just one accordion at a time
      </label>
    </div>
  );
}

export default Checkbox;
