import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import logo from '../Assets/logo.PNG'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {

  const [menu, setMenu] = useState('shop')

  const {getTotalItems} = useContext(ShopContext)

  return (
    <div className='navbar'>

      <div className='nav-logo'>
        <img src={logo} alt="logo" />
        <p>AB STORE</p>
      </div>

      <ul className="nav-menu">               {/* text-decoration: none no lo esta tomando en el CSS */}
        <li onClick={() => {setMenu('shop')}}><Link to='/' style={{textDecoration: 'none'}} >Shop</Link>{menu === 'shop' ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu('men')}}><Link to='/men' style={{textDecoration: 'none'}} >Men</Link>{menu === 'men' ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu('women')}}><Link to='/women' style={{textDecoration: 'none'}} >Women</Link>{menu === 'women' ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu('kids')}}><Link to='/kids' style={{textDecoration: 'none'}} >Kids</Link>{menu === 'kids' ? <hr/> : <></>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'> <button>Login</button> </Link>
        <Link to='/cart'> <img src={cart_icon} alt="cart" /> </Link>
        <div className="nav-cart-count">{getTotalItems()}</div> {/* contador preview de items en el carrito */}
      </div>

    </div>
  )
}