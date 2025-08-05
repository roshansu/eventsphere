import React from 'react'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import EventcardsShimmer from './Shimmer/EventcardsShimmer'
import Tags from './Tags'


const Eventcards = ({hackathon, data, ind}) => {
    const [shimmer, setShimmer] = useState(true);
    const [hackshimmer, setHackShimmer] = useState(true);
    const [wish, setWish] = useState(false);
    // console.log('data = ',data)
        
   
    if(!hackathon)
    setTimeout(()=>{
        setShimmer(false);
    },1000);

    if(hackathon)
        setTimeout(()=>{
            setHackShimmer(false);
        },1000);
  
    useEffect(()=>{
        setHackShimmer(true)
        setShimmer(true)
    },[])
    if(shimmer && !hackathon)
    return(
        <EventcardsShimmer/>
    )

    if(hackshimmer && hackathon)
    return(
        <EventcardsShimmer/>
    )

    // https://static.vecteezy.com/system/resources/previews/041/180/849/non_2x/technology-event-poster-editor_template.jpeg

  return (
    <div className='border w-full lg:w-fit  relative bg-white rounded-lg lg:p-6 p-3  shadow-md border-gray-300'>
        <div className='lg:flex gap-6 '>
            
            <img className='object-cover lg:hidden max-h-60 w-full rounded-2xl' src={data?.image} alt="" />
            <div className='flex relative flex-col  gap-2 '>
                
                <div className=''>
                    <p className='text-xl max-w-72 truncate  font-bold '>{data.name}</p>
                    <div className='flex items-center gap-2 mt-3  text-blue-500 font-medium  rounded-br-md '>
                        <i className="fa-solid fa-eye"></i>
                        <p>{Math.floor(Math.random()*1500+100)} &bull; views</p>
                        <i onClick={()=>setWish(wish?false:true)} className={`${wish?'text-red-400':'text-gray-400'} ml-2 cursor-pointer text-2xl fa-solid fa-heart `}></i>
                    </div>
                </div>
                <div className='flex gap-2 items-center text-lg text-gray-700 font-medium'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p className='max-w-72 truncate'>{data.location}</p>
                </div>
                <div className='flex gap-2'>
                    {
                        data.tags.map(item=><Tags key={item} tag={item}/>)
                    }
                </div>
                <div className='flex gap-2 items-center text-base lg:text-lg text-gray-700 '>
                    <i className="fa-solid fa-calendar"></i>
                    <p>{data.startDate} - {data.endDate} &bull; {data.time}</p>
                </div>
                <div className={`${hackathon?' flex':'hidden'} gap-2 text-base items-center lg:text-lg text-gray-700 `}>
                    <i className="fa-solid fa-clock"></i>
                    <p>duration &bull; {hackathon?data.duration:''}</p>
                </div>
                <div className={`${hackathon?'flex':'hidden'} gap-2 items-center text-base lg:text-lg text-gray-700 `}>
                    <i className="fa-solid fa-user-group"></i>
                    <p>Team size &bull; {hackathon?data.teamSize:''}</p>
                </div>
                <div className='flex gap-2 items-center text-base lg:text-lg text-gray-700 '>
                    <i className="fa-solid fa-money-bill-wave"></i>
                    <p>Entry fee &bull; ₹ {data.fee}</p>
                </div>
                <div className={`${hackathon?'flex':'hidden'} gap-2 items-center text-base lg:text-lg text-gray-700 `}>
                    <i className="fa-solid fa-trophy"></i>
                    <p>Total prize &bull; ₹ {hackathon?data.prize.totalPrize:''}</p>
                </div>
                <div className='flex gap-2 items-center text-base lg:text-lg text-gray-700 '>
                    <i className="fa-solid fa-circle-xmark"></i>
                    <p>Registeration closes on {data.deadline}</p>
                </div>
                <Link to={`/${hackathon?'challenges':'event'}/details/${ind}`}  className={` w-1/2 text-center px-4 py-3 mt-2  text-white rounded-lg  font-medium cursor-pointer ${hackathon?' bg-[#003459]':'bg-[#1b263b]'}`}>View details</Link>
            </div>
            <div className={`px-4 py-3 bg-[#023047] text-white  font-medium rounded-tr-lg animate-pulse text-lg top-0 right-0 absolute ${hackathon?'bg-[#240046]':'bg-[#023047]'}`}>{Math.floor(Math.random()*573+12)+' '}    seats left</div>
            <img className='object-cover hidden lg:block lg:h-1/2 lg:w-40 h-1/3 w-32 rounded-2xl' src={data.image} alt="" />
        </div>
      </div>
  )
}

export default Eventcards
