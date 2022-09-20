import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Error from './Error'
import Navbar from '../component/Navbar'
import Blog from './Blog'
import Dynamic from './Dynamic'
import User from './User'

const Super = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/*' element={<Error/>}/>
                <Route path='/blog/:title' element={<Dynamic/>}/>
                <Route  path='/user' element={<User/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Super