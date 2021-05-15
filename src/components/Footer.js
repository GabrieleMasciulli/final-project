import React from 'react'
import '../static/css/Footer.css'

const Column = ({ title, items }) => {
  return (
    <div className='column'>
      <span>{title}</span>
      <ul>
        {items.map(item => {
          return (
            <li key={item.text}>
              <a href={item.url}>{item.text}</a>{' '}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Footer = ({ crypto }) => {
  const items = [
    [
      {
        text: 'Instagram',
        url: 'https://www.instagram.com/gabriele_masciulli/',
      },
      {
        text: 'GitHub',
        url: 'https://github.com/GabrieleMasciulli',
      },
    ],
    [
      {
        text: 'About Me',
        url: '',
      },
      {
        text: 'Why this platform?',
        url: '',
      },
    ],
    [
      {
        text: 'API',
        url: '',
      },
    ],
  ]
  return (
    <footer className='footer-wrapper'>
      <div className='footer-content'>
        <div className='footer-left'></div>
        <div className='footer-right'>
          <Column title='Socials' items={items[0]} />
          <Column title='About' items={items[1]} />
          <Column title='Services' items={items[2]} />
        </div>
        <div className='footer-meta'>
          @{new Date().getFullYear()} QcoinCap. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
