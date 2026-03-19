import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'  
import Home from './components/Home'
import Shop from './components/Shop'
import Product from './components/common/Product'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>  
      <Route path='/' element={<Home />} />
      <Route path='/Shop' element={<Shop />} />
      <Route path='/Product' element={<Product />} />
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
