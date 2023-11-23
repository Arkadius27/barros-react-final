import React, { useContext } from 'react'

import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

  const {product} = props;

  const {addToCart} = useContext(ShopContext);

  return (
    <div className='product-display'>
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className="product-display-img">
          <img className='product-display-img-main' src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-star">
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_dull_icon} />
          <p>(134)</p>
        </div>
        <div className="product-display-prices">
          <div className="product-display-old-price">${product.old_price}</div>
          <div className="product-display-new-price">${product.new_price}</div>
        </div>
        <div className="product-display-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero nam sapiente veniam fuga in optio tempora aliquam vitae soluta, at nihil earum eligendi, nulla rem excepturi consequatur, esse culpa.
        </div>
        <div className="product-display-size">
          <h1>Select Size</h1>
          <div className="product-display-size-options">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
        <p className='product-display-category'><span>Category:</span> {product.category}</p>
      </div>
    </div>
  )
}

export default ProductDisplay