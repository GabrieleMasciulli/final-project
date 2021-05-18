import React from 'react'

const Thead = () => {
  return (
    <thead>
      <tr>
        <th align='left'>
          <div className='thead-text'>
            <p>Name</p>
          </div>
        </th>
        <th align='right'>
          <div className='thead-text'>
            <p>Price</p>
          </div>
        </th>
        <th align='right'>
          <div className='thead-text'>
            <p>24H</p>
          </div>
        </th>
        <th align='right'>
          <div className='thead-text'>
            <p>Holdings</p>
          </div>
        </th>
        <th align='right'>
          <div className='thead-text'>
            <p>Profit/Loss</p>
          </div>
        </th>
        <th align='right'>
          <div className='thead-text'>
            <p>Actions</p>
          </div>
        </th>
      </tr>
    </thead>
  )
}

export default Thead
