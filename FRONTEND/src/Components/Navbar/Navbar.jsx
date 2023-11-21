import React from 'react'

import './Navbar.css'
import logo from '../Assets/logo.PNG'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>AB STORE</p>
      </div>

      <ul className="nav-menu">
        <li>Shop <hr /> </li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart" />
      </div>

    </div>
  )
}