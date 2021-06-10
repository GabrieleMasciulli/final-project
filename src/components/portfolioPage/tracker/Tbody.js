import React from 'react'
import Asset from './Asset'

const Tbody = ({ assets, deleteAsset }) => {
  return (
    <tbody>
      {assets.map(asset => (
        <Asset
          key={asset.position.id}
          id={asset.position.id}
          price={asset.last_price}
          coin={asset.coin}
          dayChange={asset.percentage_day_change}
          dailyTrend={asset.daily_trend}
          holdingInCrypto={asset.holding_in_crypto}
          holdingInCurrency={asset.holding_in_currency}
          profit={asset.profit_in_currency}
          profitChange={asset.percentage_profit_change}
          profitTrend={asset.profit_trend}
          onDelete={deleteAsset}
        />
      ))}
    </tbody>
  )
}

export default Tbody
