import React from 'react'
import { useState, useEffect } from 'react'
import data from '../utils/Dummy';
import Eventcards from './Eventcards';
import ProfileShimmer from './Shimmer/ProfileShimmer';

const Profile = () => {

  const [loading, setLoading] = useState(true); 
  const [card, setCard] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 2000)
  },[])

  if(loading){
    return(
      <ProfileShimmer/>
    )
  }

  return (
    <div className='lg:mt-32 mt-22 flex flex-col mb-16 gap-4 items-center'>
      <div onClick={() => window.history.back()} className='flex gap-4 items-center'>
        <div className='size-12 flex items-center justify-center rounded-full border bg-gray-200'>
            <i className="fa-solid  text-xl fa-arrow-left"></i>
        </div>
        <p className='text-xl font-medium'>Shobhit university</p>
      </div>
      <div className='lg:mt-16 mt-4 border-gray-300 shadow-md rounded-lg mx-3 bg-white lg:w-1/2'>
        <div style={{backgroundImage:"url('https://www.shutterstock.com/image-vector/back-school-vector-banner-design-260nw-2477115505.jpg')"}} className='bg-gray-300 object-cover relative  rounded-t-lg h-32 lg:h-36'>
            <div className='absolute left-1/2 -translate-x-1/2 top-1/2'>
                <img className='size-28 mx-6 bg-gray-100  p-2 border-2  border-blue-600 object-cover rounded-full' src="https://www.shobhituniversity.ac.in/images/shobhit_img/sud-logo.png" alt="" />
                <p className='text-black text-center mt-1 text-lg lg:text-xl font-medium'>Shobhit University</p>
                <p className='text-center text-gray-700  lg:text-lg font-medium'>Organization</p>
            </div>
        </div>
        <div className='px-4  mt-24  gap-6'>
                 
            <div className=' flex flex-col items-center border-b border-amber-300 pb-6 mt-2 p-3 text-center  text-gray-800'>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur rem quam repellendus perspiciatis possimus quas quis aspernatur fuga doloremque?</p>
                <div className='flex lg:text-lg items-center gap-6 justify-center'>
                  <button className=' cursor-pointer mt-3 px-3 py-1 rounded-lg text-white font-medium bg-blue-800'>
                    <i className="fa-solid fa-plus"></i>
                    &nbsp; Follow
                  </button>

                  <button className=' cursor-pointer mt-3 px-3 py-1 rounded-lg text-white font-medium bg-green-800'>
                    <i className="fa-solid fa-comment"></i>
                    &nbsp; Message
                  </button>
                </div>

                <div className='flex mt-4 font-medium items-center justify-center gap-3 lg:gap-6 '>
                    <div className=' border-r text-center pr-2 border-gray-400 '>
                      <i className="fa-solid fa-user-group"></i>
                      <p> 200 followers</p>
                    </div>

                    <div className=' border-r text-center pr-2 border-gray-400 gap-2'>
                      <i className="fa-solid fa-calendar"></i>
                      <p> 2 events</p>
                    </div>
                    <div className=' border-r text-center pr-2 border-gray-400 gap-2'>
                      <i className="fa-solid fa-handshake-simple"></i>
                      <p> 5 challenges</p>
                    </div>
                    
                </div>

                <div className='flex lg:text-3xl text-2xl mt-4 gap-6 items-center justify-center'>
                    <a className='flex  items-center justify-center size-12 font-medium rounded-full bg-blue-200' href="#">
                      <i className="fa-brands fa-linkedin text-[#008bf5]"></i>
                    </a>

                    <a className='flex  items-center justify-center size-12 font-medium rounded-full bg-red-200' href="#">
                      <i className="fa-brands fa-instagram text-[#b62f2f]" ></i>
                    </a>

                    <a className='flex  items-center justify-center size-12 font-medium rounded-full bg-green-200' href="#">
                      <i className="fa-solid fa-globe text-[#146b51]" ></i>
                    </a>

                </div>
            </div>

            <div className='mt-6 lg:p-4'>
              <div className={`text-gray-700 border-b border-gray-300 pb-4  flex gap-4 lg:gap-10 text-lg lg:text-xl  items-center `}>
                <button onClick={()=>setCard(card?false:true)} className={`px-4 ${card?'bg-gray-300':'bg-white'} transition-all duration-300 py-2 rounded-md `}>
                  <i className="fa-solid fa-calendar"></i>
                  &nbsp; Events
                </button>

                <button onClick={()=>setCard(card?false:true)} className={`px-4 ${card?'bg-white':'bg-gray-300'} transition-all duration-300 py-2 rounded-md `}>
                  <i className="fa-solid fa-handshake-simple"></i>
                  &nbsp; Challenges
                </button>
              </div>
              
              <div className='mt-8 w-full lg:w-fit h-[700px] mb-6 lg:h-[500px] overflow-auto flex flex-col gap-8 items-center'>
                  {
                    card? <Eventcards ind={0} data={data[0][0]} key={data[0][0].id} hackathon={false} />:
                    <Eventcards ind={0} data={data[1][0]} key={data[1][0].id} hackathon={true} />
                  }
                  {
                    card? <Eventcards ind={1} data={data[0][1]} key={data[0][1].id} hackathon={false} />:
                    <Eventcards ind={1} data={data[1][1]} key={data[1][1].id} hackathon={true} />
                  }
                  {
                    card? <Eventcards ind={2} data={data[0][2]} key={data[0][2].id} hackathon={false} />:
                    <Eventcards ind={2} data={data[1][2]} key={data[1][2].id} hackathon={true} />
                  }
              </div>

            </div>
            
        </div>      
      </div>
    </div>
  )
}

export default Profile
