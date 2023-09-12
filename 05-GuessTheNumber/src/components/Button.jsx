import React from 'react'

function Button(props) {
    const { text, onClick } = props;
  return (
    <div className="flex justify-center py-5">
        <button onClick={onClick} className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded">{text ? text : 'Submit'}</button>
    </div>
  )
}

export default Button