import React from 'react'

function Card(props) {
  return (
    <div className='bg-white w-[90%] h-[60%] md:w-1/2 md:h-1/2 rounded-lg p-5 border-2 border-l-cyan-200 border-t-cyan-200 border-r-blue-200 border-b-blue-200 shadow-lg shadow-black/40 flex items-center flex-col'>
        {props.children}
    </div>
  )
}

export default Card;