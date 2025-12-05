import React from 'react'
import Home from './pages/home'
import Consultancy from './pages/Consultancy'
import Design from './pages/Design'
import Horoscope from './pages/Horoscope'
import Remedies from './pages/Remedies'
import Contactus from './pages/contactus'  
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/consultancy' element={<Consultancy/>} />
        <Route path='/design' element={<Design/>} />
        <Route path='/horoscope' element={<Horoscope/>} />
        <Route path='/remedies' element={<Remedies/>} />
        <Route path='/contactus' element={<Contactus/>} />
       </Routes>
    </div>
  )
}

export default App
