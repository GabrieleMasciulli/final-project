import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProfileDropdownItem = ({ name, svg, handleClick, url }) => {
  return (
    <Link
      className='profile-dropdown-link'
      to={{
        pathname: `/${url}`,
        state: {},
      }}
    >
      <div onClick={handleClick} className='profile-dropdown-item'>
        <FontAwesomeIcon icon={svg} />
        <span>{name}</span>
      </div>
    </Link>
  )
}

export default ProfileDropdownItem
