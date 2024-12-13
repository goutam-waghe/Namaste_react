import React from 'react'
import "../styles/Home.scss"
import Home_img from "../assets/bg.jpg"
import delivery_logo from "../assets/deliveryicon.png"
import table from "../assets/table.png" 
import takeWay from "../assets/take-away.png" 
import delivery_man from "../assets/delivery-man (1).png" 
import catering from "../assets/catering.png" 

const Home = () => {
  return (
    <>
    <div className='layout'>
    <div className='home' id='home'>
    <main >
       <h1>Welcome to Burger King</h1>
       <h3>Your Taste, Your Way!</h3>
       <p>At Burger King, we serve fire-grilled goodness with bold flavors that bring people together. From the iconic Whopper® to crispy fries and irresistible desserts, we’re here to satisfy every craving.</p>
    </main>
    <img src={Home_img}/>
   </div>
   <div className='home_1'>
   
    <img src={delivery_logo} alt="" />
    <p>Your favorite flame-grilled burgers, crispy sides, and refreshing drinks are just a click away! At Burger King, we’re all about bringing the KING experience to your doorstep—hot, fresh, and just the way you like it.</p>
    </div>

   <div className='home_2' id='about'>
    <h1>Who We are</h1>
    <p>At Burger King, we’ve been serving flame-grilled burgers and delicious meals since 1954. Known for our iconic Whopper®, we take pride in delivering bold flavors, fresh ingredients, and meals made just the way you like them. With a presence in over 100 countries, we blend global classics with local favorites to create unforgettable dining experiences. Whether you’re dining in, on the go, or ordering delivery, we’re committed to serving quality food and making every meal memorable. At Burger King, taste is always king!</p>
   </div> 

   <div className='home_3'id='services' >
    <h1>Services</h1>
    <div className='services' >
      <div className='service' id='service_1' >
        <img src={takeWay} alt="" />
        <p>Takeway</p>
      </div>
      <div className='service' id='service_2'>
        <img src={delivery_man} alt="" />
        <p>Fast Delivery</p>
      </div>
      <div className='service' id='service_3'>
        <img src={table} alt="" />
        <p>Dine-in</p>
      </div>
      <div className='service' id='service_4'>
        <img src={catering} alt="" />
        <p>Catering Services</p>
      </div>
      
     
    </div>
   </div>
   </div>
   </>
    
  )
}

export default Home
