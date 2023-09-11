import React from 'react';

function Selector(props) {
  return (
    <select
      className='h-[50px] cursor-pointer w-full border-2 rounded-md border-cyan-200 px-2 focus:outline-none '
      name="selector"
      id="selector"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    >
      {[...Array(9)].map((_, index) => (
        <option key={index}>{index + 1}</option>
      ))}
    </select>
  );
}

export default Selector;
