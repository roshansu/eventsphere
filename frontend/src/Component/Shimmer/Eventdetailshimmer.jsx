import React from 'react'
import EventcardsShimmer from './EventcardsShimmer'

const Eventdetailshimmer = () => {
  return (
    <div className='lg:flex block px-4 lg:px-0 gap-12 mt-32 justify-center'>
        <div className="border bg-white  relative shadow-md border-gray-300 rounded-md animate-pulse">
      <div className="px-4 py-3 h-10 w-40 bg-gray-300 absolute top-0 right-0 rounded-tr-md"></div>
      <div className="h-96 bg-gray-300 mx-auto w-full"></div>
      <div className="p-4 border-t border-gray-300 bg-white">
        <div className="flex lg:flex-row flex-col justify-between gap-4 border-b border-gray-300 pb-4">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="px-3 py-2 border flex items-center gap-2 border-gray-300 rounded-md w-48 h-10 bg-gray-300"></div>
          ))}
        </div>
        <div className="lg:flex mt-4 gap-12">
          <div className="flex lg:w-[50%] flex-col gap-4">
            <div className="h-8 w-48 bg-gray-300 rounded-md"></div>
            <div className="h-10 w-40 bg-gray-300 rounded-md"></div>
            <div className="h-6 w-20 bg-gray-300 rounded-md"></div>
            <div className="h-10 w-32 bg-gray-300 rounded-md"></div>
            <div className="h-6 w-24 bg-gray-300 rounded-md"></div>
            <div className="h-16 w-64 bg-gray-300 rounded-md"></div>
            <div className="h-6 w-20 bg-gray-300 rounded-md"></div>
            <div className="h-16 w-64 bg-gray-300 rounded-md"></div>
          </div>
          <div className="flex mt-4 lg:mt-0 h-fit rounded-md p-4 border border-gray-300 flex-col items-center gap-4">
            <div className="h-10 w-48 bg-gray-300 rounded-md"></div>
            <div className="h-20 w-20 bg-gray-300 rounded-full"></div>
            <div className="h-8 w-32 bg-gray-300 rounded-md"></div>
            <div className="h-6 w-24 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="mt-10 border border-gray-300 p-4">
        <div className="max-w-2xl">
          <div className="h-8 w-48 bg-gray-300 rounded-md"></div>
          <div className="h-20 w-full bg-gray-300 rounded-md mt-2"></div>
        </div>
      </div>
    </div>
    <div className='hidden lg:flex flex-col gap-8'>
        <EventcardsShimmer/>
        <EventcardsShimmer/>
        <EventcardsShimmer/>
    </div>
    </div>
  )
}

export default Eventdetailshimmer
