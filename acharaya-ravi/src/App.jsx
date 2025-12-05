import React from 'react'
import Home from '../src/pages/home'
import Consultancy from '../src/pages/Consultancy'
import Design from '../src/pages/Design'
import Horoscope from '../src/pages/Horoscope'
import Remedies from '../src/pages/Remedies'
import Contactus from '../src/pages/contactus'  
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/consultancy' element= {<Consultancy/>}></Route>
        <Route path='/Design' element= {<Design/>}></Route>
        <Route path='/Horoscope' element= {<Horoscope/>}></Route>
        <Route path='/Remedies' element= {<Remedies/>}></Route>
        <Route path='/contactus' element= {<Contactus/>}></Route>
       </Routes>
    </div>
  )
}

export default App
