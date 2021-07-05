import React from 'react'
import { useSelector } from 'react-redux'

const MailInput = ({ onChange, email }) => {
  const { errors: { email: errorMessage } = {} } = useSelector(
    state => state.auth
  )
  return (
    <div className='input-wrapper'>
      <div className='label'>Email Address</div>
      <input
        value={email}
        onChange={onChange}
        placeholder='Enter your email address...'
        type='email'
      ></input>
      {errorMessage ? <div className='error-message'>{errorMessage}</div> : ''}
    </div>
  )
}

export default MailInput
