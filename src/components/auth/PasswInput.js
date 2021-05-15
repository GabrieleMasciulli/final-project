import React from 'react'

//font awesome
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PasswInput = ({ value, onChange, error }) => {
  return (
    <div className='input-wrapper'>
      <div className='label'>Password</div>

      <div className='passw-input-wrapper'>
        <input
          value={value}
          onChange={onChange}
          type='password'
          placeholder='Enter your password...'
        ></input>
        {error === 'invalid' ? (
          <div className='error-message'>
            Password should contain both letter and number, with minimum length
            of 8 characters
          </div>
        ) : (
          ''
        )}
        <span>
          <FontAwesomeIcon fill='#a6b0c3' icon={faEye} />
        </span>
      </div>
    </div>
  )
}

export default PasswInput
