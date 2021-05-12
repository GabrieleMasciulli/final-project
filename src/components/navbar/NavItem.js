import React from 'react'

const NavItem = ({ name, url }) => {
  return (
    <li>
      <a target='_self' href={url}>
        <div className='link-content' aria-expanded='false'>
          <span fontWeight='600' fontSize='14px' color='text' className='link'>
            <span>{name}</span>
          </span>
        </div>
      </a>
    </li>
  )
}

export default NavItem
