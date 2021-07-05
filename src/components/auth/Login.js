import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../static/css/Auth.css'
import MailInput from './MailInput'
import PasswInput from './PasswInput'
import SubmitBtn from './SubmitBtn'
import CloseIcon from '../designItems/CloseIcon'
import LoginSuccess from '../designItems/Success'

import { useSelector, useDispatch } from 'react-redux'
import {
  changeMail,
  changePassword,
  showSignup,
  cancelAuth,
  loginRequest,
} from '../../reducers/authentication'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const {
    failureMessage,
    successMessage,
    password,
    email,
    isSigningIn: visible,
  } = useSelector(state => state.auth)

  const contentStyle = {
    width: '480px',
    height: 'auto',
  }

  return (
    <div className={`auth-wrapper ${visible ? 'opened' : ''}`}>
      <div className='auth-content' style={contentStyle}>
        <CloseIcon onClick={() => dispatch(cancelAuth())} />
        {!successMessage ? (
          <div className='form-wrapper'>
            <div className='title'>Log In</div>
            <div className='top-info'>
              New to QCoinCap?
              <span
                onClick={() => dispatch(showSignup())}
                className='redirect-link'
              >
                Create an account
              </span>
            </div>

            <MailInput
              email={email}
              onChange={({ target }) => dispatch(changeMail(target.value))}
            />
            <PasswInput
              password={password}
              onChange={({ target }) => dispatch(changePassword(target.value))}
            />
            <SubmitBtn
              handleClick={() =>
                dispatch(loginRequest(email, password, history))
              }
              type={'login'}
            />

            {/* error message */}
            <div className='error-message text-center'>{failureMessage}</div>
          </div>
        ) : (
          <LoginSuccess wrapper={'form-wrapper'} message={successMessage} />
        )}
      </div>
    </div>
  )
}

export default Login
