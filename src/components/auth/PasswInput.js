import React from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'

const PasswInput = ({ password, onChange }) => {
  const { errors: { password: errorMessage } = {} } = useSelector(
    state => state.auth
  )

  return (
    <div className='input-wrapper'>
      <div className='label'>Password</div>

      <div className='passw-input-wrapper'>
        <input
          value={password}
          onChange={onChange}
          type='password'
          placeholder='Enter your password...'
        ></input>
        {errorMessage ? (
          <div className='error-message'>{errorMessage}</div>
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
