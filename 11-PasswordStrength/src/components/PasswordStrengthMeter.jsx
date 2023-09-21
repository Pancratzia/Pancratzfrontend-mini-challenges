import React from 'react'
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password }) => {

    const testResult = zxcvbn(password);
    const num = testResult.score * 100/4;

    const functionProgressColor = () => {
        switch(testResult.score) {
            case 0:
                return '#828282';
            case 1:
                return "#EA1111";
            case 2:
                return "#FFAD00";
            case 3:
                return "#9BC158";
            case 4:
                return "#00B500";
            default:
                return none;     
        }
    }

    const changePasswordColor = () => ({
        background: functionProgressColor(),
        width: `${num}%`,
        height: '7px',
    })

    const createPassLabel = () => {
        switch(testResult.score) {
            case 0:
                return "Very Weak";
            case 1:
                return "Weak";
            case 2:
                return "Fair";
            case 3:
                return "Good";
            case 4:
                return "Strong";
            default:
                return none;     
        }
    }

  return (
    <>
        <div className="progress" style={{height: '7px'}}>
            <div className="progress-bar" style={changePasswordColor()}>
            </div>
        </div>

        <p className="text-right" style={{color: functionProgressColor()}}>{createPassLabel()}</p>
    </>
  )
}

export default PasswordStrengthMeter