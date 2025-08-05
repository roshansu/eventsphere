import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
 const [length, setLength] = useState(0)
  const [signup, setSignup] = useState({
    type: 'student',
  })



  const [createPassword, setCreatePassword] = useState('')
  const [info, setInfo] = useState('');
  const [info2, setInfo2] = useState('')
  const [OTP, setOtp] = useState('');
  const [hide, setHide] = useState(false)
  const [count, setCount] = useState(120);

  function timer(){
    let id = setInterval(() => {
      setCount((prev) => prev-1)
    }, 1000);

    setTimeout(() => {
      clearInterval(id);
      setCount(120);
      setHide(false)
    }, 120000);

  }

  console.log(count);

  const handlesignup = (e) => {
    const { id, value} = e.target
    setSignup({ ...signup, [id]: value })

    console.log(signup)
  }


  const handleOtp = ()=>{
    setHide(true)
    timer();

  }

  const handleHost = (e)=>{
    e.prsignupDefault()
  }

  return (
  <div className='pt-32 mb-16 flex justify-center'>
    <form onSubmit={handleHost} className=' mt-8 text-lg bg-white p-4 border border-gray-300 shadow-sm rounded-lg' action="">
        <p className='text-2xl text-[#093FB4] underline font-bold text-center'>Signup now</p>

        <div className='lg:flex mt-3 items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="type">Signup as a*</label>
             <select
             required={true}
             className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100'
             name="" id="">
              <option selected={true} value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Name*</label>
            <input onChange={handlesignup}  id='name' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="text" placeholder={`enter your name`} />
          </div>
          
        </div>

        <div className='lg:flex mt-3 items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="newpass">Create password*</label>
            <input onChange={(e)=>{
              if(e.target.value.length<8)
                  setInfo('Password length should greater or equal to 8');
              else{
                setInfo('');
                setCreatePassword(e.target.value);
              }
            }} id='password' 
            className={`w-[300px] ${info?'border-red-500':'border-gray-300'} focus:bg-gray-300 border outline-none transition duration-200  p-2 rounded-md bg-gray-100`} required={true} type="password" placeholder={`***********`} />
            <p className='text-red-600 text-sm'>{info}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="password">Confirm password*</label>
            <input onChange={(e)=>{
              if(e.target.value != createPassword)
                  setInfo2('Password is not matching');
              else{
                setInfo2('');
                handlesignup(e);
              }
            }} id='newpass' 
            className={`w-[300px] ${info2?'border-red-500':'border-gray-300'} focus:bg-gray-300 border outline-none transition duration-200  p-2 rounded-md bg-gray-100`} required={true} type="password" placeholder={`***********`} />
            <p className='text-red-600 text-sm'>{info2}</p>
          </div>
          
        </div>

        <div className='lg:flex mt-3 mb-3 items-center gap-6'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email*</label>
            <input onChange={handlesignup} id='email' className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="email" placeholder={`enter your email`} />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="otp">Enter OTP*</label>
            <input onChange={(e)=>{
              const val = e.target.value.toString();

              if(val.length<=6){
                  setOtp(val)
              }
            }} id='otp' value={OTP} className='w-[300px] focus:bg-gray-300 border outline-none transition duration-200 border-gray-300 p-2 rounded-md bg-gray-100' required={true} type="number" placeholder={`enter OTP`} />
          </div>
        </div>
          
        <p className={`${hide?'inline-block':'hidden'} mr-[20%] text-[#FF3F33] font-medium text-base`} >Resend OTP after {count} second</p>
       <button
       onClick={handleOtp}
       className={` ${hide?'hidden':''} mt-4 w-[40%] mr-[20%] px-6 py-2 font-medium text-white  rounded-lg bg-[#129990] transition hover:bg-[#096B68] cursor-pointer duration-300`} type='button'>Send OTP</button>
       <button className='mt-4 w-[40%] px-6 py-2 mb-3 font-medium text-white  rounded-lg bg-[#3c096c] transition hover:bg-[#10002b] cursor-pointer duration-300' type='submit'>Submit</button>
        <Link to={'/login'} className='text-base  text-blue-600 font-medium underline'>Already have an account?</Link>
      
    </form>
  </div>
  )
}

export default Signup
