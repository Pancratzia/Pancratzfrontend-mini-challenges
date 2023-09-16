function Input({ value, setValue }) {
  return (
    <input
      type="text"
      className="bg-white text-black font-bold py-2 px-4 rounded-xl w-full focus:outline-none"
      placeholder="Enter an element..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;
