export const Input = ({ inputs, values, handleChange }) => {
    return (
      <>
        {inputs.map((input, index) => (
          <div key={index} className="flex flex-col py-1">
            <label htmlFor={input} className="text-gray-700 font-bold pb-1">
              {input + ":"}
            </label>
            <input
              key={index}
              type="text"
              name={input}
              placeholder={`${input}...`}
              value={values[index]}
              onChange={(e) => handleChange(e, index)}
              className="outline-none w-full border-b-2"
            />
          </div>
        ))}
      </>
    );
  };