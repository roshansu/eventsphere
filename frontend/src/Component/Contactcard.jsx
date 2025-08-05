import React from 'react'

const Contactcard = ({props}) => {
  return (
    <div className='flex px-3 py-2  border gap-2 border-gray-300 rounded-md'>
        <img className='size-12 object-cover rounded-full' src="https://www.shobhituniversity.ac.in/images/shobhit_img/sud-logo.png" alt="" />
        <div>
            <p className='text-black font-medium'>{props.name}</p>
            <p>{props.profession}</p>

            <div className='flex gap-3 items-center'>
            <i className="fa-solid text-black fa-envelope"></i>
            <p>{props.email}</p>
           </div>

           <div className='flex gap-3 items-center'>
            <i className="fa-solid text-black fa-phone"></i>
            <p>{props.phone}</p>
           </div>
            
        </div>
    </div>
  )
}

export default Contactcard
