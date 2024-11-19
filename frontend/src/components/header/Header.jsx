import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
    <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>Choose from a deserve menu featuring a delectable array of dishes crafted with the finest incredients and culinary expertise. Our mission is to satisfy your cravings and elevate yoour dining experiance, one delicious meal at a time</p>
        <a href="#explore-menu"><button>View Menu</button></a>
    </div>
    </div>
  )
}

export default Header