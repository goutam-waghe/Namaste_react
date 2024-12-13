import React from 'react'
import "../styles/Contact.scss"
const Contact = () => {
  return (
    <form action="/contact" >
      <div>      
        <label htmlFor="name">Name</label>
      <input type="text" name="" id="name" placeholder='Name'/></div>
      <div>      
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" placeholder='Email'/></div>
      <div>      
        <label htmlFor="message">Message</label>
        <textarea placeholder='Message' id='message'></textarea></div>

      
    
      <button type='submit' >submit</button>
    </form>
  )
}

export default Contact
