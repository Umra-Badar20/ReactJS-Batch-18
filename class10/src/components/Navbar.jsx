import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { PostDataContext } from '../context/ThemeContext';

const Navbar = (props) => {
   const data= useContext(PostDataContext)
    console.log(props, data);
  return (
    <div className='flex px-10 py-4  justify-between bg-blue-950'>
      <h2 className='text-2xl'>{data[0]} rephrased to {data[1]}</h2>
      <div>{props.children[0]}</div>
      <div>{props.children[1]}</div>
      <Nav2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
