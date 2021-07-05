import React from 'react'
import { useSelector } from 'react-redux'

const UsernameInput = ({ onChange, username }) => {
  const { errors: { username: errorMessage } = {} } = useSelector(
    state => state.auth
  )

  return (
    <div className='input-wrapper'>
      <div className='label'>Username</div>
      <input
        value={username}
        onChange={onChange}
        placeholder='Enter your username...'
        type='username'
      ></input>
      {errorMessage ? <div className='error-message'>{errorMessage}</div> : ''}
    </div>
  )
}

export default UsernameInput
