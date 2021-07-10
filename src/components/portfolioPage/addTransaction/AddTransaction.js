import React from 'react'
import CloseIcon from '../../designItems/CloseIconV2'
import Searchbar from './Searchbar'
import Results from './Results'
import { useDispatch } from 'react-redux'
import { hideTradePanel } from '../../../reducers/trade'

const AddTransaction = () => {
  const dispatch = useDispatch()

  return (
    <div className='add-transaction-wrapper'>
      <div className='add-transaction-content'>
        <div className='transaction-top-info'>
          <div>Select Coin</div>
          <CloseIcon onClick={() => dispatch(hideTradePanel())} />
        </div>

        <div className='transaction-search-content'>
          <Searchbar />
          <Results />
        </div>
      </div>
    </div>
  )
}

export default AddTransaction
