import React from 'react'

import './Offers.css'

import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>offers for you</h1>
        <p>ONLY THE BEST SELLING PRODUCTS</p>
        <button>Check it out</button>
      </div>

      <div className="offers-right">
        <img src={exclusive_image} alt="exclusive image" />
      </div>
    </div>
  )
}

export default Offers