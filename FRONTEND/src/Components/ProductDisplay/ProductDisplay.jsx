import React from 'react'

import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'

const ProductDisplay = (props) => {

  const {product} = props;

  return (
    <div className='product-display'>
      <div className="product-dispaly-left">
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
        <div className="product-dislay-right-star">
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay