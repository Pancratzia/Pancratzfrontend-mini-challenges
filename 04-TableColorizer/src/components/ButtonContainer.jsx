import React from 'react'

function ButtonContainer(props) {

  return (
    <div className='py-5 flex flex-col gap-5 md:flex-row'>
      {props.children}
    </div>
  )
}

export default ButtonContainer