import React, { useEffect, useState } from 'react'
import '../../wwwroot/css/Auth.css'
import MailInput from './MailInput'
import PasswInput from './PasswInput'
import UsernameInput from './UsernameInput'
import SubmitBtn from './SubmitBtn'
import CloseIcon from './CloseIcon'
import AuthService from '../../services/auth.service'
import authValidation from '../../services/authValidation'

const SignUp = ({ cancel, visible, changeToLogin }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    email: null,
    username: null,
    password: null,
  })
  const [message, setMessage] = useState('')
  const [successful, setSuccessful] = useState(false)

  const onChangeEmail = e => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangeUsername = e => {
    const username = e.target.value
    setUsername(username)
  }

  const onChangePassword = e => {
    const password = e.target.value
    setPassword(password)
  }

  const handleSigup = e => {
    const newErrors = {
      email: authValidation.validateEmail(email),
      username: authValidation.validateUsername(username),
      password: authValidation.validatePassword(password),
    }
    setErrors(newErrors)
    const validationResult = authValidation.validateRegistration(
      email,
      username,
      password
    )
    if (validationResult === 'valid') {
      AuthService.register(email, username, password).then(
        response => {
          console.log(response)
          // setMessage(response.data.message)
          // setSuccessful(true)
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          setMessage(resMessage)
          setSuccessful(false)
        }
      )
    } else {
      console.log('invalid')
    }
  }

  const contentStyle = {
    width: '480px',
    height: 'auto',
  }
  const type = 'signup'

  return (
    <div className={`auth-wrapper ${visible ? 'opened' : ''}`}>
      <div className='auth-content' style={contentStyle}>
        <CloseIcon onClick={cancel} />
        <div className='form-wrapper'>
          <div className='title'>Create an account</div>
          <div className='top-info'>
            Already have an account?
            <span onClick={changeToLogin} className='redirect-link'>
              Log In
            </span>
          </div>

          <MailInput
            value={email}
            onChange={onChangeEmail}
            error={errors.email}
          />
          <UsernameInput
            value={username}
            onChange={onChangeUsername}
            error={errors.username}
          />
          <PasswInput
            value={password}
            onChange={onChangePassword}
            error={errors.password}
          />

          <SubmitBtn handleClick={handleSigup} type={type} />
        </div>
      </div>
    </div>
  )
}

export default SignUp
