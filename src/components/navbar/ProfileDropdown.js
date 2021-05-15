import React from 'react'
import { useHistory } from 'react-router'
import DropdownItem from './ProfileDropdownItem'
import {
  faStar,
  faChartPie,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'

const ProfileDropdown = ({ handleLogout }) => {
  return (
    <div className='profile-dropdown-content'>
      <DropdownItem name='Watchlist' svg={faStar} />
      <DropdownItem name='Portfolio' svg={faChartPie} />
      <DropdownItem name='Settings' svg={faCog} />
      <DropdownItem
        name='Logout'
        svg={faSignOutAlt}
        handleClick={handleLogout}
      />
    </div>
  )
}

export default ProfileDropdown
