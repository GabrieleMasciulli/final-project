/* eslint-disable import/no-anonymous-default-export */

const validatePrice = price => {
  return price > 0 ? 'valid' : 'invalid'
}

const validateQuantity = quantity => {
  return quantity > 0 ? 'valid' : 'invalid'
}

const validateDate = date => {
  return date !== '' ? 'valid' : 'invalid'
}

const validateTimestamp = timestamp => {
  const currentTimestamp = parseInt(+new Date())
  return timestamp < currentTimestamp ? 'valid' : 'invalid'
}

const validateTrade = (quantity, price, date, timestamp) => {
  const priceValidity = validatePrice(price)
  const quantityValidity = validateQuantity(quantity)
  const dateValidity = validateDate(date)
  const timestampValidity = validateTimestamp(timestamp)

  return priceValidity === 'valid' &&
    quantityValidity === 'valid' &&
    dateValidity === 'valid' &&
    timestampValidity === 'valid'
    ? 'valid'
    : 'invalid'
}

export default {
  validateDate,
  validatePrice,
  validateQuantity,
  validateTimestamp,
  validateTrade,
}
