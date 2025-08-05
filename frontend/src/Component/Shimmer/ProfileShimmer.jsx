import React from 'react'

const ProfileShimmer = () => {
  return (
    <div className="lg:mt-32 mt-22 flex flex-col mb-16 gap-4 items-center w-full">
    {/* Header */}
    <div className="flex gap-4 items-center">
      <div className="size-12 flex items-center justify-center rounded-full border bg-gray-300 animate-pulse"></div>
      <div className="h-6 w-40 bg-gray-300 rounded animate-pulse"></div>
    </div>

    {/* Main Card */}
    <div className="lg:mt-16 mt-4 border-gray-300 shadow-md rounded-b-lg mx-2 bg-white w-full lg:w-1/2">
      <div className="bg-gray-300 -z-0 relative rounded-t-lg h-32 lg:h-36 w-full animate-pulse">

      <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 flex flex-col items-center w-full">
        <div className="size-28  mx-6 p-2 bg-gray-400 rounded-full animate-pulse"></div>
        <div className="h-6 w-32 bg-gray-300 rounded mt-2 animate-pulse"></div>
        <div className="h-5 w-24 bg-gray-300 rounded mt-1 animate-pulse"></div>
        </div>
      </div>
    </div>

    {/* Description Section */}
    <div className="px-4 mt-24 gap-6 w-full lg:w-1/2">
      <div className="h-20 min-h-[60px] w-full bg-gray-300 rounded my-2 animate-pulse"></div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center w-full">
        <div className="h-10 w-24 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-10 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Followers, Events, Challenges */}
      <div className="flex gap-6 mt-4 justify-center w-full">
        <div className="h-6 min-h-[20px] w-20 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 min-h-[20px] w-20 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 min-h-[20px] w-20 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Social Icons */}
      <div className="flex text-3xl mt-6 gap-6 items-center justify-center w-full">
        <div className="size-12 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="size-12 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="size-12 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
  )
}

export default ProfileShimmer
