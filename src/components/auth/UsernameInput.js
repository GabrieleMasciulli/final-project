import React from 'react'

const UsernameInput = ({ onChange, value, error }) => {
  return (
    <div className='input-wrapper'>
      <div className='label'>Username</div>
      <input
        value={value}
        onChange={onChange}
        placeholder='Enter your username...'
        type='username'
      ></input>
      {error === 'invalid' ? (
        <div className='error-message'>
          The username must be between 3 and 20 characters.
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default UsernameInput
