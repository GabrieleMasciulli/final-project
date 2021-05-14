import React from 'react'

const UsernameInput = ({ onChange, value }) => {
  return (
    <div className='input-wrapper'>
      <div className='label'>Username</div>
      <input
        value={value}
        onChange={onChange}
        placeholder='Enter your username...'
        type='username'
      ></input>
    </div>
  )
}

export default UsernameInput
