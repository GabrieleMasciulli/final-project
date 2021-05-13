import React, { useState } from 'react'
import '../../wwwroot/css/Auth.css'
import MailInput from './MailInput'
import PasswInput from './PasswInput'
import SubmitBtn from './SubmitBtn'
import CloseIcon from './CloseIcon'
import AuthService from '../../services/auth.service'

const Login = ({ cancel, visible, setUser }) => {
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  console.log(message)

  const contentStyle = {
    width: '480px',
    height: '380px',
  }
  const type = 'login'

  const onChangeEmail = e => {
    const email = e.target.value
    setemail(email)
  }

  const onChangePassword = e => {
    const password = e.target.value
    setPassword(password)
  }

  const handleLogin = e => {
    e.preventDefault()

    setMessage('')

    // have to add validation here
    AuthService.login(email, password).then(
      () => setUser(),
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

  return (
    <div className={`auth-wrapper ${visible ? 'opened' : ''}`}>
      <div className='auth-content' style={contentStyle}>
        <CloseIcon onClick={cancel} />
        <div className='form-wrapper'>
          <div className='title'>Log In</div>
          <div className='top-info'>
            New to QCoinCap?
            <span className='redirect-link'>Create an account</span>
          </div>

          <MailInput value={email} onChange={onChangeEmail} />
          <PasswInput
            value={password}
            onChange={onChangePassword}
            type={type}
          />
          <SubmitBtn handleClick={handleLogin} type={type} />
        </div>
      </div>
    </div>
  )
}

export default Login
