import React from 'react'
import { useState } from 'react'

const Eventform = ({isEvent = true}) => {
  const [length, setLength] = useState(0)
  const [event, setEvent] = useState({
    eventType: 'tech',
  })

  const handleEvent = (e) => {
    const { id, value, type, files } = e.target
    if(id === 'description'){
      const size = value.length
      if(size<=500){
        setLength(size)
        setEvent({...event, 'description': value})
      }
    }
    if (type === 'file') {
      setEvent({ ...event, [id]: files[0] })
    } else if (type === 'date' || type === 'time') {
      setEvent({ ...event, [id]: value })
    } else if (id === 'activities' || id === 'tags') {
      setEvent({ ...event, [id]: value.split(',') })
    } else if(id !== 'description') {
      setEvent({ ...event, [id]: value })
    }

    console.log(event)
  }

  const handleHost = (e)=>{
    e.preventDefault()
  }

  return (
    <form onSubmit={handleHost} className=' mt-8 text-lg bg-white p-4 border border-gray-300 shadow-sm rounded-lg' action="">
        <p className='text-lg font-bold '>{isEvent?'Event':'Challenge'}  details</p>

        <div className='lg:flex mt-3 items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="title">Title*</label>
            <input onChange={handleEvent}  id='title' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="text" placeholder={`enter your ${isEvent?'event':'challenge'} name`} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="startDate">Date*</label>
            <input onChange={handleEvent} id='startDate' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="date" placeholder={`enter your ${isEvent?'event':'challenge'} date`} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="startTime">Time*</label>
            <input onChange={handleEvent} id='startTime' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="time" placeholder={`enter your ${isEvent?'event':'challenge'} time`} />
          </div>
        </div>

        <div className='lg:flex mt-3 items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="deadline">Deadline*</label>
            <input onChange={handleEvent} id='deadline' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="date" placeholder={`enter your ${isEvent?'event':'challenge'} deadline`} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="eventType">{isEvent?'Event':'Challenge'} type*</label>
            <select onChange={handleEvent} id="eventType"  className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} >
              <option selected={true} value="tech">Tech</option>
              <option value="business">Business</option>
              <option value="science">Science</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
              <option value="cultural">Cultural</option>
              <option className={`${isEvent?'hidden':'block'}`} value="hackathon">Hackathon</option>
              <option className={`${isEvent?'hidden':'block'}`} value="ideathon">Ideathon</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="title">Fee*</label>
            <input onChange={handleEvent} id='fee' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="number" placeholder={`enter your ${isEvent?'event':'challenge'} fee`} />
          </div>
        </div>

        <div className='lg:flex  mt-3 items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="seat">Seats*</label>
            <input onChange={handleEvent} id='seat' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="number" placeholder="Available seats" />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor={`${isEvent?'activity':'eligiblity'}`}>{isEvent?'Activities':'Eligibility'}</label>
            <input onChange={handleEvent} id={`${isEvent?'activity':'eligiblity'}`} className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="text" placeholder={`${isEvent?'enter activity (,) seperate':'Who are eligible for this challenge'} `} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="image">{isEvent?'Event':'Challenge'} poster/image*</label>
            <input onChange={handleEvent} id='image' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="file" accept='image/*'/>
          </div>
        </div>

        <p className={`${isEvent?'hidden':'block'} text-lg mt-4 font-bold `}>Team details</p>
        
        <div className={`${isEvent?'hidden':'lg:flex'}  mt-3 items-center gap-6`}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='teamSize'>Team size*</label>
            <input onChange={handleEvent} id='teamSize' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="number" placeholder={`enter team size`} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='minTeam'>Minimum team members*</label>
            <input onChange={handleEvent} id='minTeam' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="number" placeholder={`minimum team members`} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='maxTeam'>Maximum team members*</label>
            <input onChange={handleEvent} id='maxTeam' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="number" placeholder={`maximum team members`} />
          </div>
        </div>

        <p className='text-lg mt-4 font-bold '>Enter address</p>

        <div className='lg:flex  mt-3 items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="address">Address*</label>
            <input onChange={handleEvent} id='address' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="text" placeholder={`your ${isEvent?'event':'challenge'} address`} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="city">City*</label>
            <input onChange={handleEvent} id='city' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='text' required={true} placeholder={`Your ${isEvent?'event':'challenge'} city`}/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="zip">Zip code*</label>
            <input onChange={handleEvent} id='zip' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='number' required={true} placeholder={`Your ${isEvent?'event':'challenge'} zip code`}/>
          </div>
        </div>

        <div className='lg:flex  mt-3 items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="state">State*</label>
            <input onChange={handleEvent} id='state' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='text' required={true} placeholder={`Your ${isEvent?'event':'challenge'} state`}/>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="tags">Tags for your {isEvent?'event':'challenge'}*</label>
            <input onChange={handleEvent} id='tags' className=' w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='text' required={true} placeholder="enter tags with (,) seperate"/>
          </div>
        </div>

        <p className='text-lg mt-4 font-bold '>Contact details</p>

        <div className='lg:flex  mt-3 items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="contactName">Name of person*</label>
            <input onChange={handleEvent} id='contactName' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='text' required={true} placeholder="Enter name"/>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="phone">Phone number*</label>
            <input onChange={handleEvent} id='phone' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='number' required={true} placeholder="Enter phone"/>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email address*</label>
            <input onChange={handleEvent} id='email' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='email' required={true} placeholder="Enter email"/>
          </div>
        </div>

        <p className='text-lg mt-4 font-bold '>{isEvent?'Chief Guest/Speaker':'Prize details'}</p>

        <div className={`${isEvent?'hidden':'lg:flex'}  mt-3 items-center gap-6`}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='prize'>Total prize pool*</label>
            <input onChange={handleEvent} id='prize' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="text" placeholder={`total prize pool`} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='rank1'>Rank 1*</label>
            <input onChange={handleEvent} id='rank1' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="text" placeholder={`rank 1 prize`} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='rank2'>Rank 2*</label>
            <input onChange={handleEvent} id='rank2' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="text" placeholder={`rank 2 prize`} />
          </div>
        </div>

        <div className={`${isEvent?'hidden':'lg:flex'}  mt-3 items-center gap-6`}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='rank3'>Rank 3*</label>
            <input onChange={handleEvent} id='rank3' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="text" placeholder={`rank 3 prize`} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='participants'>Participants*</label>
            <input onChange={handleEvent} id='participants' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="text" placeholder={`participants`} />
          </div>
        </div>

        <div className={`${isEvent?'lg:flex':'hidden'}  mt-3 items-center gap-6`}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="guestName">Name of Guest/Speaker*</label>
            <input onChange={handleEvent} id='guestName' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='text' required={true} placeholder="Enter name"/>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="profession">Profession*</label>
            <input onChange={handleEvent} id='profession' className=' w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='text' required={true} placeholder="Enter profession"/>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="guestPhoto">Photo</label>
            <input onChange={handleEvent} id='guestPhoto' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='file' accept='image/*'/>
          </div>
        </div>

        <div className={`${isEvent?'lg:flex':'hidden'}  mt-3 items-center gap-6`}>
          <div className='flex flex-col gap-2'>
            <label >Social link 1</label>
            <select onChange={handleEvent} className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' name="" id="social1">
              <option selected={true} disabled={true} value="">Platform</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">Linkedin</option>
            </select>
            <input onChange={handleEvent} id='link1' className=' w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='url' required={true} placeholder="Link 1"/>
          </div>

          <div className='flex flex-col gap-2'>
            <label >Social link 2</label>
            <select onChange={handleEvent} className=' focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' name="" id="social2">
              <option selected={true} disabled={true} value="">Platform</option>
              <option value="youtube">Youtube</option>
              <option value="facebook">Facebook</option>
            </select>
            <input onChange={handleEvent} id='link2' className=' w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' type='url' required={true} placeholder="Link 2"/>
          </div>
        </div>

        <p className='text-lg mt-4 font-bold '>Enter details about {isEvent?'event':'challenge'}</p>
        <div className='flex  mt-3 flex-col '>
          <label htmlFor="description">Describe your {isEvent?'event':'challenge'}*</label>
          <textarea value={event.description} onChange={handleEvent} placeholder='max words 500' rows={4} required={true} id="description" className='mt-3 w-full focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100'></textarea>
          <p className='text-gray-500 mt-1 text-sm'>{length}/500</p>
        </div>

        <button className='mt-4 px-6 py-2 font-medium text-white  rounded-lg bg-[#3c096c] transition hover:bg-[#10002b] cursor-pointer duration-300' type='submit'>Submit</button>
    </form>
  )
}

export default Eventform
