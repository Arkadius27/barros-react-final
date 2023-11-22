import React from 'react'

import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {

  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>LATEST ARRIVALS</h2>
        <div>
          <p>new</p>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero image" />
      </div>
    </div>
  )
}

export default Hero