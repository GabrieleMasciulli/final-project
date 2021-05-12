import React from 'react'

const SubmitBtn = ({ type }) => {
  return (
    <div className='submit-wrapper'>
      <button className='submit-btn'>
        {type === 'signup' ? 'Create an account' : 'Log in'}
      </button>
    </div>
  )
}

export default SubmitBtn
