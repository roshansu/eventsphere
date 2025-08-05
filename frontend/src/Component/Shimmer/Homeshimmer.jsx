import React from 'react'

const Homeshimmer = () => {
  return (
    <div className='h-screen'>
       <div className='lg:py-12 px-4 py-6 lg:px-32 mt-12 lg:mt-32 animate-pulse'>
      <div className='flex gap-36 justify-center'>
        <div className='w-full flex flex-col items-center'>
          <div className='h-12 lg:w-3/4 w-full bg-gray-300 rounded-md'></div>
          <div className='h-24 lg:w-3/4 w-full bg-gray-300 rounded-md mt-6'></div>
          <div className='flex mt-12 gap-12'>
            <div className='h-12 w-32 bg-gray-300 rounded-md'></div>
            <div className='h-12 w-32 bg-gray-300 rounded-md'></div>
          </div>
        </div>
        <div className='lg:block hidden relative'>
          <div className='border-2 max-h-[440px] max-w-[250px] min-h-[344px] min-w-[195px] bg-gray-300 rounded-md'></div>
          <div className='border-2 max-h-[367px] max-w-[245px] min-h-[290px] min-w-[195px] bg-gray-300 rounded-md absolute top-32 right-32'></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Homeshimmer
