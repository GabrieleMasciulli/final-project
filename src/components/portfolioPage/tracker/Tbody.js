import React from 'react'
import Asset from './Asset'

const Tbody = ({ assets }) => {
  return (
    <tbody>
      {assets.map(asset => (
        <Asset
          key={asset.coin.coingecko_id}
          price={asset.last_price}
          coin={asset.coin}
          dayChange={asset.percentage_day_change}
          holdingInCrypto={asset.holding_in_crypto}
          holdingInCurrency={asset.holding_in_currency}
          profit={asset.profit_in_currency}
          profitChange={asset.percentage_profit_change}
        />
      ))}
    </tbody>
  )
}

export default Tbody
