import React from 'react' 
import './Hero.css'
import Hand_icon from '../Assets/hand_icon.png'
import Hero_image from '../Assets/hero_image.png'
import arrow_icon from '../Assets/arrow.png'
const Hero = () => {
  return (
     <>
     <div className="hero">
        <div className="hero-left">
            <h2>NEEW ARRIVALS ONLY</h2>
            <div className="">
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={Hand_icon} alt="Hand_icon" />
                </div>
                <p>collections</p>
                <p>foreveryone</p>
            </div>
            <div className="hero-latest-btn">
                <div className="">Latest Collections</div>
                <img src={arrow_icon} alt="arrow_icon" />
            </div>
        </div>
        <div className="hero-right">
            <img src={Hero_image} alt="hero_image" />
        </div>
     </div>
     </>
  )
}

export default Hero