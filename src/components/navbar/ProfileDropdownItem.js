import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProfileDropdownItem = ({ name, svg, handleClick }) => {
  return (
    <div onClick={handleClick} className='profile-dropdown-item'>
      <Link
        to={{
          pathname: '#',
          state: {},
        }}
      >
        <FontAwesomeIcon icon={svg} />
        <span>{name}</span>
      </Link>
    </div>
  )
}

export default ProfileDropdownItem
