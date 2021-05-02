import React from 'react'
import '../wwwroot/css/Footer.css'

const Footer = ({ crypto }) => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-content'>
        <div className='footer-left'>Replace with QcoinCap logo.</div>
        <div className='footer-right'>Some links</div>
        <div className='footer-meta'>
          @{new Date().getFullYear()} QcoinCap. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
