import React from 'react'

const Tags = ({tag, detail}) => {
  console.log('tag = ',tag) 
  if(!detail)
  return (
    
    <p className='px-2 py-1 font-medium  bg-gray-200 text-sm border rounded-xl'>{tag}</p>
   
  )
  
  return(
    <p className='px-2 bg-blue-200 py-1 rounded-xl '>{tag}</p>
  )
}

export default Tags
