import React, { useEffect } from 'react'
import '../../../static/css/Trade.css'
import CloseIcon from '../../designItems/CloseIconV2'
import Additions from './Additions'
import Type from './Type'
import Inputs from './Inputs'
import TradeSuccess from '../../designItems/Success'
import { useDispatch, useSelector } from 'react-redux'
import {
  hideTradePanel,
  initializePrice,
  addTrade,
} from '../../../reducers/trade'

const Trade = () => {
  const dispatch = useDispatch()
  const {
    selectedCoin,
    sharePrice,
    quantity,
    purchaseTotal,
    date,
    timestamp,
    tradeSuccess,
    successMessage,
  } = useSelector(state => state.trade)

  //getting initial price of selected coin
  useEffect(() => {
    dispatch(initializePrice(selectedCoin))
  }, [dispatch, selectedCoin])

  return (
    <div className='add-transaction-wrapper'>
      <div className='add-transaction-content'>
        <div className='transaction-top-info'>
          <div>Add Transaction</div>
          <CloseIcon onClick={() => dispatch(hideTradePanel())} />
        </div>

        <div className='trade-content'>
          {!tradeSuccess ? (
            <>
              <Type />

              <div className='trade-details-wrapper'>
                <div className='trade-details-content'>
                  <Inputs />
                  <Additions />
                  <div className='total-spent-wrapper'>
                    <p>Total Spent</p>
                    <div>${purchaseTotal}</div>
                  </div>
                  <div className='add-trade-wrapper'>
                    <button
                      onClick={() =>
                        dispatch(
                          addTrade(sharePrice, quantity, date, timestamp)
                        )
                      }
                    >
                      AddTransaction
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <TradeSuccess wrapper={''} message={successMessage} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Trade
