import React, { useContext } from 'react'

import { ShopContext } from '../../Context/ShopContext'

import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

  const {getTotalAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className='cart-items'>
      <div className="cart-items-main-format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id]>0) {
          return (
            <div>
              <div className="cart-items-main-format cart-items-ind-format">
                <img className='cart-icon-product-icon' src={e.image} alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='cart-items-remove' src={remove_icon} onClick={() => {removeFromCart(e.id)}} />
              </div>

              <hr />
            </div>
          )
        }

        return null;
      })}

      <div className='cart-items-down'>
        <div className="cart-items-total">
          <h1>Purchase Total</h1>
          <div>
            <div className="cart-items-total-items">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>

            <hr />

            <div className="cart-items-total-items">
              <p>Shipping</p>
              <p>Free</p>
            </div>

            <hr />

            <div className="cart-items-total-items">
              <h2>Total</h2>
              <h2>${getTotalAmount()}</h2>
            </div>
          </div>

          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems