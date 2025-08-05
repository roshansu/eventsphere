import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
// import isActive from '../Slice'
// import {Link} from 'react-router-dom'

const Nav = () => {
  const [type, setType] = useState('home')
  const location = useLocation();
  return (
    <div className='bg-white border-b border-gray-300 flex lg:justify-center lg:p-4 fixed top-0 w-screen z-10 p-2 lg:gap-12 items-center '>
      <Link to={"/"} onClick={()=>setType('')} className='text-3xl font-bold hidden lg:flex pr-4 border-gray-300 tracking-tighter border-r '>EventSphere</Link>
      <div className='flex  text-base  font-medium items-center mt-2 lg:text-xl  text-gray-700 gap-5 lg:gap-10'>
      <Link
        to="/"
        className={`${
          location.pathname === "/" ? "border-blue-500" : "border-gray-300"
        } lg:hidden md:block transition-colors duration-200 cursor-pointer pb-2 border-b-2`}
      >
        Home
      </Link>
      <Link
        to="/event"
        className={`${
          location.pathname.startsWith("/event") ? "border-blue-500" : "border-gray-300"
        } transition-colors duration-200 cursor-pointer pb-2 border-b-2`}
      >
        Events
      </Link>
      <Link
        to="/challenges"
        className={`${
          location.pathname.startsWith("/challenges") ? "border-blue-500" : "border-gray-300"
        } transition-colors duration-200 cursor-pointer pb-2 border-b-2`}
      >
        Challenges
      </Link>
      <Link
        to="/projects"
        className={`${
          location.pathname.startsWith("/projects") ? "border-blue-500" : "border-gray-300"
        } transition-colors duration-200 cursor-pointer pb-2 border-b-2`}
      >
        Projects
      </Link>
        <Link to={'/signup'}><i className="fa-solid text-base hidden lg:!hidden md:block pb-2 fa-bars"></i></Link>
      </div>
      <div className='lg:flex hidden items-center gap-8'>
        <i className="fa-solid text-2xl fa-circle-user"></i>
        <Link to={'/host/event'} className='px-4 text-lg py-2 bg-[#2d6a4f] cursor-pointer text-white font-medium rounded-xl'>Host</Link>
        <Link to={'/login'} className='px-4 text-lg py-2 bg-[#004e89] cursor-pointer text-white font-medium rounded-xl'>Login</Link>
        <Link to={'signup'} className='px-4 text-lg py-2 bg-[#051923] cursor-pointer text-white font-medium rounded-xl'>Sign up</Link>
      </div>
    </div>
  )
}

export default Nav
