import React from 'react'
import '../../wwwroot/css/Auth.css'
import MailInput from './MailInput'
import PasswInput from './PasswInput'
import SubmitBtn from './SubmitBtn'

const Login = () => {
  const contentStyle = {
    width: '480px',
    height: '380px',
  }
  const type = 'login'

  return (
    <div className='auth-wrapper opened'>
      <div className='auth-content' style={contentStyle}>
        <div className='form-wrapper'>
          <div className='title'>Log In</div>
          <div className='top-info'>
            New to QCoinCap?
            <span className='redirect-link'>Create an account</span>
          </div>

          <MailInput />
          <PasswInput type={type} />
          <SubmitBtn type={type} />
        </div>
      </div>
    </div>
  )
}

export default Login
