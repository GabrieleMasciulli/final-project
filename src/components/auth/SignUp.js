import React, { useState } from 'react'
import '../../wwwroot/css/Auth.css'
import MailInput from './MailInput'
import PasswInput from './PasswInput'
import SubmitBtn from './SubmitBtn'
import CloseIcon from './CloseIcon'
import AuthService from '../../services/auth.service'

const SignUp = ({ cancel, visible }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    AuthService.register(email, username, password).then(
      response => {
        setMessage(response.data.message)
        setSuccessful(true)
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
  }

  const contentStyle = {
    width: '480px',
    height: '430px',
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
            <span className='redirect-link'>Log In</span>
          </div>

          <MailInput value={email} onChange={onChangeEmail} />
          <PasswInput
            value={password}
            onChange={onChangePassword}
            type={type}
          />

          <SubmitBtn handleClick={handleSigup} type={type} />
        </div>
      </div>
    </div>
  )
}

export default SignUp
