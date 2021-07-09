import authService from '../services/auth.service'
import authValidation from '../services/authValidation'

const init_user = 'INIT_USER'
const show_login = 'SHOW_LOGIN'
const show_signup = 'SHOW_SIGNUP'
const hide_auth = 'HIDE_AUTH'
const login_success = 'LOGIN_SUCCESS'
const login_failure = 'LOGIN_FAILURE'
const signup_success = 'SIGNUP_SUCCESS'
const signup_failure = 'SIGNUP_FAILURE'
const validation_failure = 'AUTH_VALIDATION_FAILURE'
const set_password = 'SET_PASSWORD'
const set_email = 'SET_EMAIL'
const set_username = 'SET_USERNAME'
const logout = 'LOGOUT'

const initial_state = {
  errors: {
    email: '',
    password: '',
    username: '',
  },
  failureMessage: '',
  successMessage: '',
  email: '',
  password: '',
  username: '',
  isAuthenticated: false,
  isSigningIn: false,
  isSigningUp: false,
  user: {},
}

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case show_login:
      return {
        ...state,
        isSigningIn: true,
        isSigningUp: false,
      }

    case show_signup:
      return {
        ...state,
        isSigningIn: false,
        isSigningUp: true,
      }

    case hide_auth:
      return {
        ...state,
        isSigningIn: false,
        isSigningUp: false,
        username: '',
        password: '',
        email: '',
        failureMessage: '',
        successMessage: '',
        errors: initial_state.errors,
      }

    case set_email:
      return {
        ...state,
        email: action.email,
      }

    case set_password:
      return {
        ...state,
        password: action.password,
      }

    case set_username:
      return {
        ...state,
        username: action.username,
      }

    case validation_failure:
      const {
        email: emailValidity,
        password: passwordValidity,
        username: usernameValidity = {},
      } = action.errors

      return {
        ...state,
        email: emailValidity === 'invalid' ? '' : state.email,
        username: emailValidity === 'invalid' ? '' : state.username,
        password: emailValidity === 'invalid' ? '' : state.password,
        errors: {
          email:
            emailValidity === 'invalid' ? 'This is not a valid email.' : '',
          password:
            passwordValidity === 'invalid'
              ? 'Password should contain both letter and number, with minimum length of 8 characters'
              : '',
          username:
            usernameValidity === 'invalid'
              ? 'The username must be between 3 and 20 characters.'
              : '',
        },
      }

    case login_success:
      return {
        ...state,
        isAuthenticated: true,
        user: action.data,
        errors: initial_state.errors,
        successMessage: 'You have successfully logged in!',
        failureMessage: '',
      }

    case login_failure:
      const errorLogin = action.error
      const errorMessageLogin =
        (errorLogin.response &&
          errorLogin.response.data &&
          errorLogin.response.data.message) ||
        errorLogin.message ||
        errorLogin.toString()
      return {
        ...state,
        errors: initial_state.errors,
        email: '',
        password: '',
        username: '',
        failureMessage: errorMessageLogin,
      }

    case logout:
      return initial_state

    case signup_success:
      return {
        ...state,
        errors: initial_state.errors,
        successMessage: action.successMessage,
        failureMessage: '',
      }

    case signup_failure:
      const errorSignup = action.error
      const errorMessageSignup =
        (errorSignup.response &&
          errorSignup.response.data &&
          errorSignup.response.data.message) ||
        errorSignup.message ||
        errorSignup.toString()
      return {
        ...state,
        errors: initial_state.errors,
        username: '',
        email: '',
        password: '',
        failureMessage: errorMessageSignup,
      }

    case init_user:
      return {
        ...initial_state,
        isAuthenticated: true,
        user: action.user,
      }

    default:
      return state
  }
}

export const getUser = () => {
  return dispatch => {
    const user = authService.getCurrentUser()
    if (user) {
      dispatch({
        type: init_user,
        user,
      })
    }
  }
}

export const showLogin = () => {
  return dispatch => {
    dispatch({
      type: show_login,
    })
  }
}

export const showSignup = () => {
  return dispatch => {
    dispatch({
      type: show_signup,
    })
  }
}

export const cancelAuth = () => {
  return dispatch => {
    dispatch({
      type: hide_auth,
    })
  }
}

export const changeMail = email => {
  return dispatch => {
    dispatch({
      type: set_email,
      email,
    })
  }
}

export const changeUsername = username => {
  return dispatch => {
    dispatch({
      type: set_username,
      username,
    })
  }
}

export const changePassword = password => {
  return dispatch => {
    dispatch({
      type: set_password,
      password,
    })
  }
}

export const registerRequest = (email, password, username) => {
  return async dispatch => {
    const validationResult = authValidation.validateRegistration(
      email,
      username,
      password
    )

    if (validationResult === 'valid') {
      try {
        const { message } = await authService.register(
          email,
          username,
          password
        )

        dispatch({
          type: signup_success,
          successMessage: message,
        })
      } catch (error) {
        dispatch({
          type: signup_failure,
          error,
        })

        setTimeout(() => {
          dispatch({
            type: signup_failure,
            error: '',
          })
        }, 5000)
      }
    } else {
      const validationErrors = {
        email: authValidation.validateEmail(email),
        password: authValidation.validatePassword(password),
        username: authValidation.validateUsername(username),
      }

      dispatch({
        type: validation_failure,
        errors: validationErrors,
      })
    }
  }
}

export const loginRequest = (email, password, history) => {
  return async dispatch => {
    const validationResult = authValidation.validateLogin(email, password)

    if (validationResult === 'valid') {
      try {
        const data = await authService.login(email, password)

        dispatch({
          type: login_success,
          data,
        })

        setTimeout(() => {
          dispatch({
            type: hide_auth,
          })
          history.push('/')
        }, 3000)
      } catch (error) {
        dispatch({
          type: login_failure,
          error,
        })

        setTimeout(() => {
          dispatch({
            type: login_failure,
            error: '',
          })
        }, 5000)
      }
    } else {
      const validationErrors = {
        email: authValidation.validateEmail(email),
        password: authValidation.validatePassword(password),
      }

      dispatch({
        type: validation_failure,
        errors: validationErrors,
      })
    }
  }
}

export const logoutUser = () => {
  return dispatch => {
    authService.logout()
    dispatch({ type: logout })
  }
}

export default reducer
