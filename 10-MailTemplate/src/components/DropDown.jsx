export const DropDown = ({ options, handleChange }) => {
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