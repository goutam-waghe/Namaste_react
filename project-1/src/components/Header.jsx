import React from 'react'
import logo from "../assets/logo.png"
import "../styles/Header.scss"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const Header = () => {
  return (
    <div className='header'> 
      <div className='logo'>
        <img src={logo} alt="" />
      <p>Barger King</p></div>
      <nav>
        <HashLink className='nav-link' to={"/#home"}>Home</HashLink>
        <Link className='nav-link' to={"/menu"}>menu</Link>
        <Link className='nav-link' to={"/contact"}>Contact</Link>
        <HashLink className='nav-link' to={"/#about"}>About</HashLink>
        <HashLink className='nav-link' to={"/#services"}>Services</HashLink>
      </nav>
   
    </div>
  )
}

export default Header
