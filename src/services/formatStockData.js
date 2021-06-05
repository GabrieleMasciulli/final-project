/* eslint-disable import/no-anonymous-default-export */
const formatDecimals = number => {
  if (number < 1) {
    const decimal_zeros = -Math.floor(Math.log10(number) + 1)
    const fixed = decimal_zeros + 4

    return number.toFixed(fixed === Infinity ? 0 : fixed)
  } else {
    return number.toFixed(2)
  }
}

const formatThousands = number => {
  if (number < 1) {
    return number
  }
  return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const isNull = val => {
  return val === null || val === undefined ? true : false
}

const numberWithFormattedDecimals = val => {
  if (isNull(val)) return 'No data'

  const number = Math.abs(val)
  const formattedNumber = formatDecimals(number)

  return `${formattedNumber}`
}

const noValueIfNull = val => {
  return isNull(val) ? '' : val
}

const priceValue = val => {
  if (isNull(val)) return 'No data'

  const number = Math.abs(val)
  const formattedNumber = formatDecimals(number)

  return `$${formatThousands(formattedNumber)}`
}

const profitValue = val => {
  if (isNull(val)) return 'No data'

  const number = Math.abs(val)
  const formattedNumber = formatDecimals(number)

  return val > 0
    ? `+ $${formatThousands(formattedNumber)}`
    : `- $${formatThousands(formattedNumber)}`
}

const percentageValue = val => {
  return isNull(val) ? 'No data' : `${Math.abs(val.toFixed(2))} %`
}

const localeStringConverter = val => {
  return isNull(val) ? 'No data' : val.toLocaleString()
}

const formatHomepageTable = arr => {
  const formattedData = arr.map(crypto => {
    return {
      ...crypto,
      symbol: crypto.symbol.toUpperCase(),
      current_price: priceValue(crypto.current_price),
      market_cap: priceValue(crypto.market_cap),
      market_cap_rank: noValueIfNull(crypto.market_cap_rank),
      fully_diluted_valuation: priceValue(crypto.fully_diluted_valuation),
      total_volume: priceValue(crypto.total_volume),
      high_24h: priceValue(crypto.high_24h),
      low_24h: priceValue(crypto.low_24h),
      price_change_24h: priceValue(crypto.price_change_24h),
      price_change_percentage_24h: percentageValue(
        crypto.price_change_percentage_24h
      ),
      market_cap_change_24h: priceValue(crypto.market_cap_change_24h),
      market_cap_change_percentage_24h: percentageValue(
        crypto.market_cap_change_percentage_24h
      ),
      circulating_supply: localeStringConverter(crypto.circulating_supply),
      total_supply: localeStringConverter(crypto.total_supply),
      max_supply: localeStringConverter(crypto.max_supply),
      ath: priceValue(crypto.ath),
      ath_change_percentage: percentageValue(crypto.ath_change_percentage),
      atl: priceValue(crypto.atl),
      atl_change_percentage: percentageValue(crypto.atl_change_percentage),
      price_change_percentage_1h_in_currency: percentageValue(
        crypto.price_change_percentage_1h_in_currency
      ),
      price_change_percentage_24h_in_currency: percentageValue(
        crypto.price_change_percentage_24h_in_currency
      ),
      price_change_percentage_7d_in_currency: percentageValue(
        crypto.price_change_percentage_7d_in_currency
      ),
    }
  })

  return formattedData
}

const formatGlobalStats = stats => {
  return {
    ...stats,
    ended_icos: localeStringConverter(stats.ended_icos),
    upcoming_icos: localeStringConverter(stats.upcoming_icos),
    total_market_cap: priceValue(stats.total_market_cap.usd),
    total_volume: priceValue(stats.total_volume.usd),
  }
}

const formatAssetsData = assets => {
  const alteredData = assets.map(asset => {
    return {
      ...asset,
      day_change_in_currency: priceValue(asset.day_change_in_currency),
      holding_in_currency: priceValue(asset.holding_in_currency),
      last_price: priceValue(asset.last_price),
      percentage_day_change: percentageValue(asset.percentage_day_change),
      percentage_profit_change: percentageValue(asset.percentage_profit_change),
      profit_in_currency: profitValue(asset.profit_in_currency),
    }
  })

  // console.log(alteredData)
  return alteredData
}

const formatBalanceData = balance => {
  const alteredBalance = {
    holdings: priceValue(balance.holdings),
    day_change_percentage: percentageValue(balance.day_change_percentage),
    day_change_in_currency: profitValue(balance.day_change_in_currency),
  }

  return alteredBalance
}

const formatStatsData = stats => {
  const alteredStats = {
    ...stats,
    symbol: stats.symbol.toUpperCase(),
    current_price: priceValue(stats.market_data.current_price.usd),
    price_change_24h: profitValue(stats.market_data.price_change_24h),
    price_change_percentage_24h: percentageValue(
      stats.market_data.price_change_percentage_24h
    ),
    low_24h: priceValue(stats.market_data.low_24h.usd),
    high_24h: priceValue(stats.market_data.high_24h.usd),
    total_volume: priceValue(stats.market_data.total_volume.usd),
    vol_over_marketcap: numberWithFormattedDecimals(stats.vol_over_marketcap),
    market_dominance: percentageValue(stats.market_dominance),
    marketcap: priceValue(stats.market_data.market_cap.usd),
    marketcap_daily_percentage_change: percentageValue(
      stats.market_data.market_cap_change_percentage_24h
    ),
    volume: priceValue(stats.market_data.total_volume.usd),
    price_in_btc: numberWithFormattedDecimals(
      stats.market_data.current_price.btc
    ),
    price_in_eth: numberWithFormattedDecimals(
      stats.market_data.current_price.eth
    ),
    day_change_in_btc: percentageValue(
      stats.market_data.price_change_percentage_24h_in_currency.btc
    ),
    day_change_in_eth: percentageValue(
      stats.market_data.price_change_percentage_24h_in_currency.eth
    ),
  }

  return alteredStats
}

export default {
  priceValue,
  formatHomepageTable,
  formatGlobalStats,
  formatAssetsData,
  formatBalanceData,
  formatStatsData,
}
