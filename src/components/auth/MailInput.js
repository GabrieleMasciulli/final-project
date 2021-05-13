import React from 'react'

const MailInput = ({ onChange, value }) => {
  return (
    <div className='input-wrapper'>
      <div className='label'>Email Address</div>
      <input
        value={value}
        onChange={onChange}
        placeholder='Enter your email address...'
        type='email'
      ></input>
    </div>
  )
}

export default MailInput
