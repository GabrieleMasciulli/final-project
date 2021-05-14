import React from 'react'

const MailInput = ({ onChange, value, error }) => {
  return (
    <div className='input-wrapper'>
      <div className='label'>Email Address</div>
      <input
        value={value}
        onChange={onChange}
        placeholder='Enter your email address...'
        type='email'
      ></input>
      {error === 'invalid' ? (
        <div className='error-message'>This is not a valid email.</div>
      ) : (
        ''
      )}
    </div>
  )
}

export default MailInput
