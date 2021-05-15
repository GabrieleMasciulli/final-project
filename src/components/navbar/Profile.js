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

const Profile = ({ handleLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleClick = () => {}
  return (
    <div className='navbar-profile-wrapper'>
      <Tippy
        trigger='click'
        interactive='true'
        className='show-profile-tooltip'
        arrow={false}
        allowHTML='true'
        placement='bottom-end'
        content={<ProfileDropdown handleLogout={handleLogout} />}
      >
        <button className='profile-button'>
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
