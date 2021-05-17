import React, { useEffect, useState } from 'react'
import CloseIcon from '../../designItems/CloseIconV2'
import Additions from './Additions'
import Type from './Type'
import Inputs from './Inputs'
import portfolioService from '../../../services/portfolio.service'
import authService from '../../../services/auth.service'

const Trade = ({ cancel, coin }) => {
  const [user, setUser] = useState()
  const [tradeType, setTradeType] = useState('buy')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [date, setDate] = useState('')

  const getCurrentUser = () => {
    setUser(authService.getCurrentUser())
  }
  useEffect(getCurrentUser, [])

  const handleTradeTypeChange = e => {
    setTradeType(e.target.id)
  }

  const handlePriceChange = e => {
    const price = e.target.value
    setPrice(price)
  }

  const handleQuantityChange = e => {
    const quantity = e.target.value
    setQuantity(quantity)
  }

  const handleDateChange = e => {
    const date = e.target.value
    setDate(date)
  }

  const handleAddTrade = () => {
    //client side validation required...

    const dateTimestamp = parseInt((new Date(date).getTime() / 1000).toFixed(0))
    const transaction = {
      user_id: user.id,
      type: 'long',
      coin_id: coin,
      transaction: {
        type: tradeType,
        date: dateTimestamp,
        quantity: quantity,
        price: quantity,
      },
    }

    portfolioService
      .postTransaction(transaction)
      .then(response => console.log (response))
  }

  return (
    <div className='add-transaction-wrapper'>
      <div className='add-transaction-content'>
        <div className='transaction-top-info'>
          <div>Add Transaction</div>
          <CloseIcon onClick={cancel} />
        </div>

        <div className='trade-content'>
          <Type type={tradeType} handleClick={handleTradeTypeChange} />
          <div className='trade-details-wrapper'>
            <div className='trade-details-content'>
              <Inputs
                price={price}
                onPriceChange={handlePriceChange}
                quantity={quantity}
                onQuantityChange={handleQuantityChange}
              />

              <Additions date={date} onDateChange={handleDateChange} />

              <div className='total-spent-wrapper'>
                <p>Total Spent</p>
                <div>${price * quantity}</div>
              </div>

              <div className='add-trade-wrapper'>
                <button onClick={handleAddTrade}>AddTransaction</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trade
