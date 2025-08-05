import React from 'react'
import { useState } from 'react'

const Project = () => {
    const [all, setAll] = useState('all')

    return (
      <div className='lg:mt-24 mt-12 p-3 lg:px-32'>
        <div className='flex flex-wrap   gap-3 lg:gap-10 p-6 border-b border-gray-300'>
          <div onClick={() => window.history.back()}  className="flex cursor-pointer h-fit w-fit px-4 shadow-lg py-2 bg-black text-white font-medium border rounded-xl items-center gap-2 lg:gap-4 text-base lg:text-xl ">
            <i className="fa-solid fa-backward"></i>
            <p>Projects</p>
          </div>
          <button onClick={()=>setAll('all')} className={`${all==='all'?'bg-[#3d348b] text-white':'bg-white text-black'} w-fit h-fit cursor-pointer transition-all duration-200 px-3 py-2 rounded-xl font-medium border border-gray-300`}>All</button>
          <button onClick={()=>setAll('shobhit')} className={`${all==='shobhit'?'bg-[#3d348b] text-white':'bg-white text-black'} w-fit h-fit cursor-pointer transition-all duration-200 px-3 py-2 rounded-xl font-medium border border-gray-300`}>In your college</button>
          <button onClick={()=>setAll('tech')} className={`${all==='tech'?'bg-[#3d348b] text-white':'bg-white text-black'} w-fit h-fit cursor-pointer transition-all duration-200 px-3 py-2 rounded-xl font-medium border border-gray-300`}>Tech</button>
          <button onClick={()=>setAll('business')} className={`${all==='business'?'bg-[#3d348b] text-white':'bg-white text-black'} w-fit h-fit cursor-pointer transition-all duration-200 px-3 py-2 rounded-xl font-medium border border-gray-300`}>Business</button>
          <button onClick={()=>setAll('health')} className={`${all==='health'?'bg-[#3d348b] text-white':'bg-white text-black'} w-fit h-fit cursor-pointer transition-all duration-200 px-3 py-2 rounded-xl font-medium border border-gray-300`}>Health</button>
          <button onClick={()=>setAll('science')} className={`${all==='science'?'bg-[#3d348b] text-white':'bg-white text-black'} w-fit h-fit cursor-pointer transition-all duration-200 px-3 py-2 rounded-xl font-medium border border-gray-300`}>Science</button>
          <button onClick={()=>setAll('education')} className={`${all==='education'?'bg-[#3d348b] text-white':'bg-white text-black'} w-fit h-fit cursor-pointer transition-all duration-200 px-3 py-2 rounded-xl font-medium border border-gray-300`}>Education</button>
          <button onClick={()=>setAll('cultural')} className={`${all==='cultural'?'bg-[#3d348b] text-white':'bg-white text-black'} w-fit h-fit cursor-pointer transition-all duration-200 px-3 py-2 rounded-xl font-medium border border-gray-300`}>Cultural</button>
        </div>
        <div className='flex w-full lg:px-0 py-10 flex-wrap lg:justify-center gap-10'>
          <div className='mt-10 flex gap-4 items-center justify-center w-full lg:text-xl text-gray-600'>
            <i className="fa-solid fa-hourglass-end"></i>
            <p>No more projects, stay tuned</p>
          </div>
        </div>
      </div>
    )
}

export default Project
