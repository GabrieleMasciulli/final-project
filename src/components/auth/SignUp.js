import React from 'react'
import '../../static/css/Auth.css'
import MailInput from './MailInput'
import PasswInput from './PasswInput'
import UsernameInput from './UsernameInput'
import SubmitBtn from './SubmitBtn'
import CloseIcon from '../designItems/CloseIcon'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useSelector, useDispatch } from 'react-redux'
import {
  cancelAuth,
  showLogin,
  changeMail,
  changePassword,
  changeUsername,
  registerRequest,
} from '../../reducers/authentication'

const SignUp = () => {
  const dispatch = useDispatch()

  const {
    failureMessage,
    successMessage,
    username,
    password,
    email,
    isSigningUp: visible,
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
            <div className='title'>Create an account</div>
            <div className='top-info'>
              Already have an account?
              <span
                onClick={() => dispatch(showLogin())}
                className='redirect-link'
              >
                Log In
              </span>
            </div>

            <MailInput
              email={email}
              onChange={({ target }) => dispatch(changeMail(target.value))}
            />
            <UsernameInput
              username={username}
              onChange={({ target }) => dispatch(changeUsername(target.value))}
            />
            <PasswInput
              password={password}
              onChange={({ target }) => dispatch(changePassword(target.value))}
            />

            <SubmitBtn
              handleClick={() =>
                dispatch(registerRequest(email, password, username))
              }
              type={'signup'}
            />

            <div className='error-message text-center'>{failureMessage}</div>
          </div>
        ) : (
          <div className='form-wrapper'>
            <div className='success'>
              <FontAwesomeIcon icon={faCheckCircle} />
              {successMessage}
              <p
                onClick={() => dispatch(showLogin())}
                className='redirect-link'
              >
                Click to Log In
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignUp
