import React from 'react'

const CloseIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
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
  )
}

export default CloseIcon
