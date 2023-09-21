import React from 'react'

const PasswordStrengthMeter = () => {

    const changePasswordColor = () => ({
        background: 'green',
        width: '70%',
        height: '7px',
    })

  return (
    <>
        <div className="progress" style={{height: '7px'}}>
            <div className="progress-bar" style={changePasswordColor()}>

            </div>
        </div>
    </>
  )
}

export default PasswordStrengthMeter