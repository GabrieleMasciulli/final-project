import React from 'react'

const TopMiddle = () => {
  return (
    <div className='top-center-wrapper'>
      <h1>
        Ethereum Price<small>(ETH)</small>
      </h1>
      <div className='price-value-wrapper'>
        <div>$2,827.99</div>
        <span>
          <span class='icon-Caret-up'></span>6.49%
        </span>
      </div>
      <div className='bitcoin-conversion-wrapper'>
        <p>
          0.06953 BTC
          <span className='sc-1v2ivon-0 fJLBDK'>2.94%</span>
        </p>
      </div>
      <div class='sc-16r8icm-0 dOJIkS sliderSection___tjBoJ'>
        <div class='sc-16r8icm-0 gMZGhD nowrap___2C79N'>
          <span class='highLowLabel___2bI-G'>Low:</span>
          <span class='highLowValue___GfyK7'>$2,170.23</span>
        </div>
        <div class='sc-16r8icm-0 dOJIkS slider___2_uly'>
          <span class='sc-1hm9f3g-0 dmzjSD'>
            <span style={{ width: '75.9864%' }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                height='24px'
                width='24px'
                viewBox='0 0 24 24'
                class='sc-16r8icm-0 fNFbRb sc-1hm9f3g-1 cbEuhW'
              >
                <path d='M18.0566 16H5.94336C5.10459 16 4.68455 14.9782 5.27763 14.3806L11.3343 8.27783C11.7019 7.90739 12.2981 7.90739 12.6657 8.27783L18.7223 14.3806C19.3155 14.9782 18.8954 16 18.0566 16Z'></path>
              </svg>
            </span>
          </span>
        </div>
        <div class='sc-16r8icm-0 HwsGY nowrap___2C79N'>
          <span class='highLowLabel___2bI-G'>High:</span>
          <span class='highLowValue___GfyK7'>$2,993.15</span>
        </div>
        <div
          class='sc-16r8icm-0 juyDgZ namePillBase___AZ1aa'
          display='inline-block'
        >
          24h
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            height='12'
            width='12'
            viewBox='0 0 24 24'
            class='sc-16r8icm-0 kxULrj'
          >
            <path
              d='M6 9L12 15L18 9'
              stroke='currentColor'
              stroke-width='2'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default TopMiddle
