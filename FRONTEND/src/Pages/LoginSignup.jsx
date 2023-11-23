import React from 'react'

import './CSS/LoginSignup.css'

const LoginSignup = () => {
  
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>

        <div className="login-signup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Your email address' />
          <input type="password" placeholder='Safe password' />
        </div>

        <button>Continue</button>

        <p className="login-signup-login">
          Already have an account? <span>Login here</span>
        </p>

        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms & provacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup