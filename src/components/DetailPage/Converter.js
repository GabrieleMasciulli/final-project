import React from 'react'

const Converter = () => {
  return (
    <div>
      <div className='converter-wrapper'>
        <div className='converter-content'>
          <div className='converter-crypto'>
            <img
              className='converter-img'
              src='https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png'
              alt=''
            />
            <div className='converter-name'>
              <p className='symbol'>DOT</p>
              <p className='name'>Polkadot</p>
            </div>
            <div className='converter-input'>
              <input
                type='number'
                name=''
                id=''
                pattern='/^-?d+.?d*$/'
                maxLength='8'
                placeholder='0'
              />
            </div>
          </div>
          <div className='converter-currency'>
            <img
              className='converter-img'
              src='https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg'
              alt=''
            />
            <div className='converter-name'>
              <p className='symbol'>USD</p>
              <p className='name'>United States Dollar</p>
            </div>
            <div className='converter-input'>
              <input
                type='number'
                name=''
                id=''
                pattern='/^-?d+.?d*$/'
                maxLength='8'
                placeholder='0'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Converter
