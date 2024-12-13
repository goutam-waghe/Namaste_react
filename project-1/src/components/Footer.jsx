import React from 'react'
import logo from "../assets/logo.png"
import "../styles/Footer.scss"
import instagram from "../assets/instagram (4).png"

import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin (2).png"

const Footer = () => {
  return (
    <div className='footer'> 
    <div className='logo'>
      <img src={logo} alt="" />
    <p>Barger King</p></div>
    <div>

    </div>
   
    <div className='social-links'>
        <h2>Follow us</h2>
        <div>
        <div className='social-link'>
            <img src={instagram} alt="" />
            <p>Instagram</p>
        </div>
        <div className='social-link'>
            <img src={twitter} alt="" />
            <p>Twitter</p>
        </div>
        <div className='social-link'>
        <img src={linkedin} alt="" />
            <p>Linkedin</p>
        </div>
        </div>
    </div>
 
  </div>
  )
}

export default Footer
