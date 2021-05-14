/* eslint-disable import/no-anonymous-default-export */
import { isEmail } from 'validator'

const validateUsername = username => {
  if (username.length < 3 || username.length > 20) {
    return 'invalid'
  } else return 'valid'
}

const validatePassword = password => {
  if (password.length < 8) {
    return 'invalid'
  } else return 'valid'
}

const validateEmail = email => {
  if (!isEmail(email)) {
    return 'invalid'
  } else return 'valid'
}

const validateRegistration = (email, username, password) => {
  const mailValidity = validateEmail(email)
  const passwordValidity = validatePassword(password)
  const usernameValidity = validateUsername(username)

  if (
    mailValidity === 'valid' &&
    passwordValidity === 'valid' &&
    usernameValidity === 'valid'
  ) {
    return 'valid'
  } else return 'invalid'
}

const validateLogin = (email, password) => {
  const mailValidity = validateEmail(email)
  const passwordValidity = validatePassword(password)

  if (mailValidity === 'valid' && passwordValidity === 'valid') {
    return 'valid'
  } else return 'invalid'
}

export default {
  validateRegistration,
  validateLogin,
  validateUsername,
  validateEmail,
  validatePassword,
}
