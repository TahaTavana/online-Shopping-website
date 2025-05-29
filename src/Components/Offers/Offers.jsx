import React from 'react'
import './offers.css'
import exclucive_img from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <>
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>offers for you </h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclucive_img} alt="exclucive_img" />
        </div>
    </div>
    </>
  )
}

export default Offers