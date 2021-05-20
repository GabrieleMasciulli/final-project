import React from 'react'
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
      <DropdownItem name='Watchlist' svg={faStar} url='#' />
      <DropdownItem name='Portfolio' svg={faChartPie} url='portfolio' />
      <DropdownItem name='Settings' svg={faCog} url='#' />
      <DropdownItem
        name='Logout'
        svg={faSignOutAlt}
        handleClick={handleLogout}
      />
    </div>
  )
}

export default ProfileDropdown
