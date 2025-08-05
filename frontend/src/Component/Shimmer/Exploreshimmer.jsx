import React from 'react'

const Exploreshimmer = () => {
  return (
    <div className="mt-32">
    {/* Shimmer Title */}
    <div className="h-10 w-48 mx-auto bg-gray-300 animate-pulse rounded-md"></div>

    <div className="flex justify-center gap-16 lg:gap-22 mt-16 flex-wrap">
      {Array(3).fill(0).map((_, index) => (
        <div
          key={index}
          className="shadow-[10px_10px_0px_-1px_rgba(0,_0,_0,_0.8)] flex flex-col gap-6 lg:w-1/3 items-center p-6 border rounded-lg bg-white"
        >
          {/* Shimmer Title */}
          <div className="h-10 w-32 bg-gray-300 animate-pulse rounded-md"></div>

          {/* Icon and Description */}
          <div className="flex gap-3 lg:gap-6">
            <div className="h-12 w-12 bg-gray-300 animate-pulse rounded-full"></div>
            <div className="h-20 w-64 bg-gray-300 animate-pulse rounded-md"></div>
          </div>

          {/* Button */}
          <div className="h-10 w-24 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Exploreshimmer
