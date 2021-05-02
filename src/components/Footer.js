import React from 'react'
import '../wwwroot/css/Footer.css'

const Column = () => {
  return (
    <div className='column'>
      <span>Column 1</span>
      <ul>
        <li>
          <a>Item</a>
        </li>
        <li>
          <a>Item</a>
        </li>
        <li>
          <a>Item</a>
        </li>
        <li>
          <a>Item</a>
        </li>
        <li>
          <a>Item</a>
        </li>
      </ul>
    </div>
  )
}

const Footer = ({ crypto }) => {
  return (
    <footer className='footer-wrapper'>
      <div className='footer-content'>
        <div className='footer-left'></div>
        <div className='footer-right'>
          <Column />
          <Column />
          <Column />
          <Column />
        </div>
        <div className='footer-meta'>
          @{new Date().getFullYear()} QcoinCap. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
