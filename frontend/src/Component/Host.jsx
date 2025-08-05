import S1Icon from '../assets/react.svg';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import Eventform from './Eventform';

const Host = ({isEvent}) => {
  const [active, setActive] = useState(true);
  
  return (
    <div className='pt-32  pb-16 relative  flex justify-center gap-6'>
     <div className='ml-32 px-6'>
        <div className='text-2xl font-bold flex items-center gap-6'>
          <p className='text-[#0d1b2a]'>Organize your {isEvent?'Challenges':'events'} in one place</p>
          <i className="fa-regular text-3xl animate-pulse fa-calendar text-[#0d1b2a]"></i>
        </div>
        <div className='text-lg text-white flex font-medium items-center gap-6 mt-10 '>
          <Link onClick={()=>setActive(active?false:true)}  className={`${active?'bg-[#003049]':'bg-gray-500'} transition-all duration-300 rounded-md px-4 py-3 `} to={'/host/event'}>Host event</Link>
          <Link onClick={()=>setActive(active?false:true)}  className={`${active?'bg-gray-500':'bg-[#003049]'} transition-all duration-300 rounded-md px-4 py-3 `} to={'/host/challenges'}>Host challenges</Link>
        </div>
        <Eventform isEvent={isEvent}/>
     </div>
    </div> 
  );
};

export default Host;
