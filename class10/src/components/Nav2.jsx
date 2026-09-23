import React, { useContext } from 'react'
import { PostDataContext } from '../context/ThemeContext'

const Nav2 = (props) => {
   const theme = useContext(PostDataContext)
    return (
        <div className='flex gap-4'>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Products</h3>
            <h3>Contact Us</h3>
            <h3>{props.theme}</h3>
            <h3>{theme[2]}</h3>
        </div>
    )
}

export default Nav2
