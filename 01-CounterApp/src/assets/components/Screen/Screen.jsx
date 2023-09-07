import React from 'react'
import './Screen.scss';

function Screen(props) {


  return (
    <div className='screen'>
        {props.children}
    </div>
  )
}

export default Screen;