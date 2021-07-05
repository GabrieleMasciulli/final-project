import React, { useState } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import ProfileDropdown from './ProfileDropdown'
import {
  faUserAlt,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleProfileClick = () => {
    const newShowDropdown = !showDropdown
    setShowDropdown(newShowDropdown)
  }
  return (
    <div className='navbar-profile-wrapper'>
      <Tippy
        onHide={handleProfileClick}
        trigger='click'
        interactive='true'
        className='show-profile-tooltip'
        arrow={false}
        allowHTML='true'
        placement='bottom-end'
        content={<ProfileDropdown />}
      >
        <button onClick={handleProfileClick} className='profile-button'>
          <FontAwesomeIcon icon={faUserAlt} />
          {showDropdown ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </button>
      </Tippy>
    </div>
  )
}

export default Profile
