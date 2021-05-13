import React from 'react'

const SubmitBtn = ({ type, handleClick }) => {
  return (
    <div className='submit-wrapper'>
      <button onClick={handleClick} className='submit-btn'>
        {type === 'signup' ? 'Create an account' : 'Log in'}
      </button>
    </div>
  )
}

export default SubmitBtn
