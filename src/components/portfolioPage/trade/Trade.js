import React, { useEffect, useState } from 'react'

import '../../../static/css/Trade.css'
import CloseIcon from '../../designItems/CloseIconV2'
import Additions from './Additions'
import Type from './Type'
import Inputs from './Inputs'
import portfolioService from '../../../services/portfolio.service'
import cryptoService from '../../../services/Crypto'
import authService from '../../../services/auth.service'
import tradeValidation from '../../../services/tradeValidation'
import TradeSuccess from '../../designItems/Success'

const Trade = ({ cancel, coin, isSuccedeed }) => {
  const [user, setUser] = useState()
  const [tradeType, setTradeType] = useState('buy')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const [successful, setSuccessful] = useState(false)
  const [errors, setErrors] = useState({
    timestamp: null,
    date: null,
    price: null,
    quantity: null,
  })

  //getting initial price of selected coin
  const getInitialPrice = () => {
    cryptoService.getSimplePrice(coin).then(price => setPrice(price.usd))
  }
  useEffect(getInitialPrice, [])

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
    setMessage('')

    const timestamp = parseInt(new Date(date).getTime().toFixed(0))

    const newErrors = {
      price: tradeValidation.validatePrice(price),
      quantity: tradeValidation.validateQuantity(quantity),
      date: tradeValidation.validateDate(date),
      timestamp: tradeValidation.validateTimestamp(timestamp),
    }
    setErrors(newErrors)

    const validationResult = tradeValidation.validateTrade(
      quantity,
      price,
      date,
      timestamp
    )

    if (validationResult === 'valid') {
      const transaction = {
        user_id: user.id,
        type: 'long',
        coin_id: coin,
        transaction: {
          type: tradeType,
          date: timestamp,
          quantity: quantity,
          price: price,
        },
      }
      portfolioService.postTransaction(transaction).then(response => {
        setMessage(response.message)
        setSuccessful(true)
        setTimeout(() => {
          cancel()
          isSuccedeed()
          setSuccessful(false)
        }, 2500)
      })
    }
  }

  return (
    <div className='add-transaction-wrapper'>
      <div className='add-transaction-content'>
        <div className='transaction-top-info'>
          <div>Add Transaction</div>
          <CloseIcon onClick={cancel} />
        </div>

        <div className='trade-content'>
          {!successful ? (
            <>
              <Type type={tradeType} handleClick={handleTradeTypeChange} />
              <div className='trade-details-wrapper'>
                <div className='trade-details-content'>
                  <Inputs
                    coin={coin}
                    priceError={errors.price}
                    price={price}
                    onPriceChange={handlePriceChange}
                    quantityError={errors.quantity}
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                  />

                  <Additions
                    date={date}
                    dateError={{
                      date: errors.date,
                      timestamp: errors.timestamp,
                    }}
                    onDateChange={handleDateChange}
                  />

                  <div className='total-spent-wrapper'>
                    <p>Total Spent</p>
                    <div>${price * quantity}</div>
                  </div>

                  <div className='add-trade-wrapper'>
                    <button onClick={handleAddTrade}>AddTransaction</button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <TradeSuccess wrapper={''} message={message} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Trade
