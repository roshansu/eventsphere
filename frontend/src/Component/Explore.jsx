import React from 'react'
import Eventcard from './Eventcard'
import { Link } from 'react-router'
import Exploreshimmer from './Shimmer/Exploreshimmer'
import { useState, useEffect } from 'react'

const Explore = () => {

  return (
    <div className='mt-32 flex flex-wrap flex-col items-center'>
      <p className='text-3xl font-bold text-center'>Upcoming events and challenges</p>
      <div className='mt-22'>
        <Link to={'/event'} className='flex gap-6 text-gray-700 items-center font-medium text-xl'>
          <p >Upcoming events</p>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
        <div className='mt-6'>
          <Eventcard hackathon={false} key={1} explore={true}/>
            <Link to={'/challenges'} className='flex mt-10 mb-6 gap-6 text-gray-700 items-center font-medium text-xl'>
              <p>Upcoming challenges</p>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          <Eventcard hackathon={true} key={2} explore={true}/>  
        </div>
      </div>
    </div>
  )
}

export default Explore
