import React from 'react'
import '../../wwwroot/css/Auth.css'
import MailInput from './MailInput'
import PasswInput from './PasswInput'
import SubmitBtn from './SubmitBtn'

const SignUp = () => {
  const contentStyle = {
    width: '480px',
    height: '380px',
  }
  const type = 'signup'

  return (
    <div className='auth-wrapper opened'>
      <div className='auth-content' style={contentStyle}>
        <div className='form-wrapper'>
          <div className='title'>Create an account</div>
          <div className='top-info'>
            Already have an account?
            <span className='redirect-link'>Log In</span>
          </div>

          <MailInput />
          <PasswInput type={type} />
          <SubmitBtn type={type} />
        </div>
      </div>
    </div>
  )
}

export default SignUp
