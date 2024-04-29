import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'

const App = () => {
  return (
    <div>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Products/>} />
   </Routes>
    </div>
  )
}

export default App
