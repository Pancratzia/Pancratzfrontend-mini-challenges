import React from 'react'
import './Screen.scss';

function Screen(props) {


  return (
    <div className={ props.className ? props.className + ' screen' : 'screen' }>
        {props.children}
    </div>
  )
}

export default Screen;