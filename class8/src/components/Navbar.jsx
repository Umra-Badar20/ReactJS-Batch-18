import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 bg-cyan-800 text-amber-50 p-3'>
        <h2 className='text-3xl'>Smit</h2>
        <div>
          <Link className='m-3' to="/">Home</Link>
          <Link className='m-3' to="/about">About Us</Link>
          <Link className='m-3' to="/contact">Contact Us</Link>
        </div>
      </nav>
  )
}

export default Navbar
