import React from 'react'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RemoveCoin = ({ cancel, successful, message, onDelete }) => {
  const svgStyle = {
    marginRight: '10px',
    color: '#16c784',
  }

  return (
    <div className='remove-coin-container'>
      <div className='remove-coin-wrapper'>
        <div className='remove-coin-content'>
          {successful ? (
            <div>
              <div className='title'>
                <FontAwesomeIcon style={svgStyle} icon={faCheckCircle} />
                {message}
              </div>
            </div>
          ) : (
            <div>
              <div className='title'>Remove Coin</div>
              <p>
                Are you sure want to remove this coin? Any transactions
                associated with this coin will also be removed.
              </p>
              <div className='actions-wrapper'>
                <button className='remove' onClick={onDelete}>
                  Remove
                </button>
                <button className='cancel' onClick={cancel}>
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RemoveCoin
