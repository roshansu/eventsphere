import React from 'react'

const EventcardsShimmer = () => {
  return (
   
          <div className='border h-fit w-fit relative bg-white rounded-lg lg:p-6 p-3 shadow-md border-gray-300 animate-pulse'>
            <div className='lg:flex gap-6'>
              <div className='object-cover lg:hidden max-h-60 w-full rounded-2xl bg-gray-300'></div>
              <div className='flex flex-col gap-2 w-80'>
                <div className='h-6 w-32 bg-gray-300 rounded-md'></div>
                <div className='flex gap-2 items-center text-lg'>
                  <div className='h-5 w-5 bg-gray-300 rounded-full'></div>
                  <div className='h-5 w-24 bg-gray-300 rounded-md'></div>
                </div>
                <div className='flex gap-2'>
                  <div className='h-6 w-10 bg-gray-300 rounded-md'></div>
                  <div className='h-6 w-10 bg-gray-300 rounded-md'></div>
                </div>
                <div className='flex gap-2 items-center'>
                  <div className='h-5 w-5 bg-gray-300 rounded-full'></div>
                  <div className='h-5 w-40 bg-gray-300 rounded-md'></div>
                </div>
                <div className='h-10 w-1/2 bg-gray-300 rounded-md mt-2'></div>
              </div>
              <div className='px-4 py-3 bg-gray-300 rounded-tr-lg animate-pulse text-lg top-0 right-0 absolute w-32 h-8'></div>
              <div className='object-cover hidden lg:block lg:h-1/2 lg:w-40 h-1/3 w-32 rounded-2xl bg-gray-300'></div>
            </div>
          </div>
  )
}

export default EventcardsShimmer
