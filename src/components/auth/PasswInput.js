import React from 'react'

//font awesome
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PasswInput = ({ type }) => {
  return (
    <div className='input-wrapper'>
      <div className='label'>Password</div>

      <div className='passw-input-wrapper'>
        <input type='password' placeholder='Enter your password...'></input>
        <span>
          <FontAwesomeIcon fill='#a6b0c3' icon={faEye} />
        </span>
      </div>

      {type === 'signup' ? (
        <div className='input-description'>
          Password should contain both letter and number, with minimum length of
          8 characters
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default PasswInput
