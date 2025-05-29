import React from 'react'
import logo from'../Assets/logo.png'
import instagram from'../Assets/instagram_icon.png'
import pintester from'../Assets/pintester_icon.png'
import whatsapp from'../Assets/whatsapp_icon.png'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <p>Shopper</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Product</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram} alt="instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester} alt="instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp} alt="instagram" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>CopyRight @ 2023-All right reserved</p>
      </div>
    </div>
    </>
  )
}

export default Footer