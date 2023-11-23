import React from 'react'

import './Breadcrumb.css'
import bc_arrow from '../Assets/breadcrumb_arrow.png'

const Breadcrumb = (props) => {

  const {product} = props;

  return (
    <div className='breadcrumb'>
      HOME <img src={bc_arrow}/> SHOP <img src={bc_arrow}/> {product.category} <img src={bc_arrow}/> {product.name}
    </div>
  )
}

export default Breadcrumb