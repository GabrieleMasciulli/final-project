import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ name, url }) => {
  return (
    <li>
      <Link
        className='detail-redirect-wrapper'
        to={{
          pathname: `/${url}`,
        }}
      >
        <div className='link-content' aria-expanded='false'>
          <span fontWeight='600' fontSize='14px' color='text' className='link'>
            <span>{name}</span>
          </span>
        </div>
      </Link>
    </li>
  )
}

export default NavItem
