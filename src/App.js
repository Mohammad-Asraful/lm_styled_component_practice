import React from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import StyledComponent from './Component/StyledComponent'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/styledcomponent' element={<StyledComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App