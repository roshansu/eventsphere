import React from 'react'
import { Link } from 'react-router'

const Offer = () => {
  return (
    <div className='mt-32 '>
      <p className='text-4xl text-[##0d1b2a] text-center font-bold'>What we offer</p>

      <div className='flex justify-center gap-16 lg:gap-22 mt-16 flex-wrap'>
            <div className='shadow-[10px_10px_0px_-1px_rgba(0,_0,_0,_0.8)] flex flex-col gap-6 lg:w-1/3 items-center p-6 border rounded-lg bg-white  '>
                <p className='text-center font-medium text-lg lg:text-2xl px-3 py-2 border rounded-md'>Events</p>
                <div className='flex gap-3 lg:gap-6'>
                    <i className="fa-solid text-3xl fa-calendar"></i>
                    <p className='lg:text-lg text-base lg:p-3 p-2 border border-gray-700 rounded-md  font-medium text-start text-gray-700'>EventSphere lets you organize and join events from any department — whether it’s a tech talk, a cultural fest, a workshop, or a webinar. It's your space to connect, collaborate, and grow across fields. Hosting is simple, and participation is open for everyone. No boundaries, just pure interaction and learning.</p>
                </div>
                <Link to={'/event'} className='px-4 cursor-pointer py-2 bg-black  rounded-md text-xl text-white font-medium'>Explore</Link>
            </div>

            <div className='shadow-[10px_10px_0px_-1px_rgba(0,_0,_0,_0.8)] flex gap-6 lg:w-1/3 items-center p-6 border rounded-lg bg-white  flex-col'>
                <p className='text-center font-medium text-lg lg:text-2xl px-3 py-2 border rounded-md'>Challenges</p>
                <div className='flex gap-3 lg:gap-6'>
                    <i className="fa-solid text-3xl fa-desktop"></i>
                    <p className='text-lg lg:p-3 p-2 border border-gray-700 rounded-md  text-start font-medium text-gray-700'>Start a challenge or join one that excites you! From hackathons to design sprints and business case studies, EventSphere supports challenges from every domain. Compete, collaborate, or simply learn by doing — while meeting like-minded people from different backgrounds.</p>
                </div>
                <Link to={'/challenges'} className='px-4 cursor-pointer py-2 bg-black  rounded-md text-xl text-white font-medium'>Explore</Link>
            </div>

            <div className='shadow-[10px_10px_0px_-1px_rgba(0,_0,_0,_0.8)] flex lg:w-1/3 gap-6 items-center p-6 border rounded-lg bg-white  flex-col'>
                <p className='text-center font-medium text-lg lg:text-2xl px-3 py-2 border rounded-md'>Projects</p>
                <div className='flex gap-3 lg:gap-6'>
                    <i className="fa-solid text-3xl fa-diagram-project"></i>
                    <p  className='lg:text-lg text-base p-2 lg:p-3 border border-gray-700 rounded-md text-start font-medium text-gray-700'>Got a project idea and need teammates? Or want to contribute to something meaningful? EventSphere bridges the gap between creators and contributors. Whether you're in tech, design, marketing, management, or arts — find your spot and build together.</p>
                </div>
                <Link to={'/project'} className='px-4 cursor-pointer py-2 bg-black  rounded-md text-xl text-white font-medium'>Explore</Link>
            </div>
      </div>
    </div>
  )
}

export default Offer
