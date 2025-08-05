import React from 'react'

const Activitycard = ({item}) => {
  return (
    <div className='flex gap-2 text-lg text-gray-700 items-center  '>
        <i className="fa-solid fa-square-person-confined"></i>
        <p> &bull; {item}</p>
    </div>
  )
}

export default Activitycard
