import React from 'react'
import Tippy from '@tippyjs/react'

// import 'tippy.js/dist/tippy.css'
import {
  faPlus,
  faEllipsisV,
  faHistory,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TippyContent = () => {
  return (
    <div className='actions-dropdown-content'>
      <button className='actions-dropdown-btn'>
        <span>
          <FontAwesomeIcon icon={faHistory} />
        </span>
        Transactions
      </button>
      <button className='actions-dropdown-btn'>
        <span>
          <FontAwesomeIcon icon={faTrash} />
        </span>
        Remove asset
      </button>
    </div>
  )
}

const AssetActions = () => {
  return (
    <div className='asset-actions'>
      <button className='add-trade-btn'>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <Tippy
        trigger='click'
        interactive='true'
        className='actions-dropdown'
        arrow={true}
        allowHTML='true'
        placement='bottom'
        content={<TippyContent />}
      >
        <div className='asset-options'>
          <button className='asset-options-btn'>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        </div>
      </Tippy>
    </div>
  )
}

export default AssetActions
