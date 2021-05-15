import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../../wwwroot/css/Auth.css'
import MailInput from './MailInput'
import PasswInput from './PasswInput'
import SubmitBtn from './SubmitBtn'
import CloseIcon from './CloseIcon'
import AuthService from '../../services/auth.service'
import authValidation from '../../services/authValidation'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = ({ cancel, visible, setUser, changeToSignup }) => {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  })

  const contentStyle = {
    width: '480px',
    height: 'auto',
  }
  const type = 'login'

  const onChangeEmail = e => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangePassword = e => {
    const password = e.target.value
    setPassword(password)
  }

  const handleLogin = e => {
    setMessage('')

    const newErrors = {
      email: authValidation.validateEmail(email),
      password: authValidation.validatePassword(password),
    }
    setErrors(newErrors)

    const validationResult = authValidation.validateLogin(email, password)

    if (validationResult === 'valid') {
      AuthService.login(email, password).then(
        () => {
          setSuccess(true)
          setMessage('You have successfully logged in!')
          setTimeout(() => {
            setUser()
            history.push('/')
          }, 2000)
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          setMessage(resMessage)
        }
      )
    }
  }

  return (
    <div className={`auth-wrapper ${visible ? 'opened' : ''}`}>
      <div className='auth-content' style={contentStyle}>
        <CloseIcon onClick={cancel} />
        {!success ? (
          <div className='form-wrapper'>
            <div className='title'>Log In</div>
            <div className='top-info'>
              New to QCoinCap?
              <span onClick={changeToSignup} className='redirect-link'>
                Create an account
              </span>
            </div>

            <MailInput
              value={email}
              onChange={onChangeEmail}
              error={errors.email}
            />
            <PasswInput
              value={password}
              onChange={onChangePassword}
              error={errors.password}
            />
            <SubmitBtn handleClick={handleLogin} type={type} />

            {/* error message */}
            <div className='error-message text-center'>{message}</div>
          </div>
        ) : (
          <div className='form-wrapper'>
            <div className='success'>
              <FontAwesomeIcon icon={faCheckCircle} />
              {message}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
