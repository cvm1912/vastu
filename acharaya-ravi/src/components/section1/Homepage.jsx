import React from 'react'
import Navbar from './Navbar'
import HeroSection from './hero'
import WhatIsVastu from './vastu'
import History from './history'
import Form from './form'


const Homepage = () => {
  return (
    <div  className='h-screen w-full bg-amber-200'>
       <Navbar/>
       <HeroSection/>
       <WhatIsVastu/>
       <History/>
       <Form/>

        
    
    </div>
  )
}

export default Homepage
