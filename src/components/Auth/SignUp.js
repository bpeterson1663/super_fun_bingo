import * as React from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { auth } from '../../firebase'
import AuthContext from '../../context/Authentication.context'
const SignUp = (props) => {
  const { handleSubmit, register, errors, watch } = useForm()

  const submitHandler = (data) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        AuthContext.login(true)
      })
      .catch((error) => {
        console.error('ERROR IN LOGIN: ', error)
      })
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="email"
          name="email"
          data-testid="signup_email"
          ref={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address',
            },
          })}
        />
        {errors.email && errors.email.message}
        <input
          type="password"
          name="password"
          data-testid="signup_password"
          ref={register({
            required: 'You must specify a password',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
          })}
        />
        {errors.password && errors.password.message}
        <input
          type="password"
          name="confirmPassword"
          data-testid="confirmPassword"
          ref={register({
            required: 'You must confirm your password',
            validate: (value) => value === watch('password') || 'Passwords do not match',
          })}
        />
        {errors.confirmPassword && errors.confirmPassword.message}
        <input type="submit" />
      </form>
    </div>
  )
}

SignUp.propTypes = {
  location: PropTypes.object,
  history: PropTypes.array,
}

export default SignUp
