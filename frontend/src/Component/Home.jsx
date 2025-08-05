import React from 'react'
// import img1 from '../assests/img1.jpeg'
// import img2 from '../assests/img2.jpeg'
import { Link } from 'react-router'
import Offer from './Offer'
import Explore from './Explore'
import Homeshimmer from './Shimmer/Homeshimmer'
import { useState, useEffect } from 'react'
import Exploreshimmer from './Shimmer/Exploreshimmer'
import EventcardsShimmer from './Shimmer/EventcardsShimmer'

const Home = () => {
    const [shimmer, setShimmer] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const shimmerTimeout = setTimeout(() => setShimmer(false), 1000);
      return () => clearTimeout(shimmerTimeout); 
    }, []);
  
    useEffect(() => {
      if (!shimmer) {
        const fadeTimeout = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(fadeTimeout);
      }
    }, [shimmer]);
  
    if (shimmer) {
      return (
        <div className="flex flex-wrap justify-center gap-12">
          <Homeshimmer />
          <Exploreshimmer />
          <EventcardsShimmer />
          <EventcardsShimmer />
          <EventcardsShimmer />
          <EventcardsShimmer />
        </div>
      );
    }
  
  return (
    <div className='lg:py-12 bg-[##edf2fb] px-4 py-6 lg:px-32 mt-12 lg:mt-32'>
        <div className={` transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }
             flex gap-40  justify-center`}>
            <div className=''>
                <p className='lg:text-5xl text-2xl text-[#0d1b2a] text-center font-bold'>Discover challenges, collaborate on projects, and innovate together.</p>
                <p className='lg:mt-12 mt-6 lg:text-xl md:text-base text-center text-gray-800 font-medium'>EventSphere is your all-in-one platform to host, join, and collaborate on events, challenges, and projects — no matter your department or background. Whether you're an organizer with a vision or a student looking to connect and grow, EventSphere makes it easy to engage with a diverse community. </p>
                <div className='flex mt-12  gap-12'>
                    <Link to={"/host/event"} className='px-6 transition hover:scale-105 duration-300 shadow-md cursor-pointer text-xl py-3 bg-white border rounded-lg font-medium'>Host</Link>
                    <Link to={"/event"} className='px-6 transition hover:scale-105 duration-300 shadow-md cursor-pointer text-xl py-3 bg-black border border-white text-white rounded-lg font-medium'>Explore</Link>
                </div>
            </div>
            <div className='lg:block hidden relative'>
                <img className='border-2 max-h-[440px] max-w-[250px]  min-h-[344px] min-w-[195px]  transition duration-300 hover:scale-105 shadow-2xl rounded-md'  src="https://i.pinimg.com/736x/6a/8d/40/6a8d40e0c5d486415624744e2f2f11c1.jpg" alt="" />
                <img className='border-2 max-h-[367px] max-w-[245px] min-h-[290px] min-w-[195px] transition duration-300 hover:scale-105 shadow-2xl border-white rounded-md absolute top-32 right-32' src="https://i.pinimg.com/736x/d9/67/c8/d967c812028b906f496f191376654dab.jpg" alt="" />
            </div>
        </div>
        <Offer/>
        <Explore/>
    </div>
  )
}

export default Home
