import React from 'react'

const CloseIcon = () => {
  const closeIconStyle = {
    position: 'absolute',
    top: '38px',
    right: '38px',
  }
  return (
    <div className='close-wrapper' style={closeIconStyle}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        height='24px'
        width='24px'
        viewBox='0 0 24 24'
        className='close-svg'
      >
        <path
          d='M18 6L6 18M18 18L6 6'
          stroke='currentColor'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
    </div>
  )
}

export default CloseIcon
