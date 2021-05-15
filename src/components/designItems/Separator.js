import React from 'react'
import svg from '../../static/img/Row separator.svg'

const Separator = () => {
  return (
    <tr>
      <td>
        <img className='vw-100' src={svg} alt='' />
      </td>
    </tr>
  )
}

export default Separator
