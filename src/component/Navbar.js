import React from 'react'
import {NavLink } from 'react-router-dom'
import './nav.css'

const Navbar = () => {
  return (
    <nav className='nav'>
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/about' className='nav-link'>About</NavLink>
        <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        <NavLink to='/blog' className='nav-link'>Blog</NavLink>
        <NavLink to='/*' className='nav-link'>Error</NavLink>
    </nav>
  )
}

export default Navbar