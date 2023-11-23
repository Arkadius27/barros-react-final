import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

import Item from '../Components/Item/Item'

import './CSS/ShopCategory.css'
import dropdown from '../Components/Assets/dropdown_icon.png'

const ShopCategory = (props) => {
  
  const {all_product} = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="category banner" />

      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1-12</span> of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown} alt="dropdown icon" />
        </div>
      </div>

      <div className="shop-category-products">
        {all_product.map((item,i) => {
          if (props.category === item.category) {
            return (
              <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            )
          }
          else {
            return null;
          }
        })}
      </div>

      <div className="shop-category-more">
        More Products
      </div>
    </div>
  )
}

export default ShopCategory