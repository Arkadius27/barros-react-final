import React from 'react'

import './Newsletter.css'

const Newsletter = () => {

  return (
    <div className='newsletter'>
      <h1>Subscribe for exclusive offers</h1>
      <p>Stay updated on the latest trends</p>
      <div>
        <input type="email" placeholder='Your email address'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter