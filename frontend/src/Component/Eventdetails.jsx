import React from 'react'
import Eventcards from './Eventcards'
import Eventdetailshimmer from './Shimmer/Eventdetailshimmer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import data from '../utils/Dummy'
import Tags from './cardcomponent/tags'
import Contactcard from './cardcomponent/Contactcard'
import Activitycard from './cardcomponent/Activitycard'
import { Link } from 'react-router'

const Eventdetails = ({challenges}) => {
    const {id} = useParams()
    // console.log(id, 'id')
    const [click, setClick] = useState(false)
    

    const [wish, setWish] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    })

    let cardData = [];
    let exploreData = [];
    challenges?cardData = data[1][id]:cardData = data[0][id];
    challenges?exploreData = data[1]:exploreData = data[0];

    const ind1 = Math.floor(Math.random() * exploreData.length)
    const ind2 = Math.floor(Math.random() * exploreData.length)
    const ind3 = Math.floor(Math.random() * exploreData.length)
    
    console.log(exploreData[ind1], 'cardDetail')

    if(loading) 
        return <Eventdetailshimmer/> 

  return (
    <>
    <div onClick={() => window.history.back()} className='flex mx-auto font-bold cursor-pointer p-3 lg:px-32 mt-20 lg:mt-28 gap-4 items-center'>
        <div className='size-12 flex items-center justify-center rounded-full border bg-gray-100'>
            <i className="fa-solid  text-xl fa-arrow-left"></i>
        </div>
        <p className='text-xl '>{cardData.name}</p>
      </div>
    <div className='flex h-fit overflow-auto justify-center gap-10 px-4 lg:mt-8 mt-3   mb-10'>
      
      <div className=' border bg-white relative  shadow-md border-gray-300 rounded-md'>
        <div className='px-4 py-3 animate-pulse text-lg absolute top-0 right-0 text-white font-medium rounded-tr-md bg-black'>{Math.floor(Math.random()*572+112)+''} seats left</div>
        <img className=' max-h-96 mx-auto  ' src={cardData.image} alt="" />
        <div className='p-4 border-t border-gray-300  bg-white'>
            <div className='flex lg:flex-row flex-col justify-between gap-4 border-b border-gray-300 pb-4 text-base text-gray-700 font-medium'>
                <div className='px-3 py-2 border flex items-center gap-2 border-gray-300 rounded-md'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{cardData.location}</p>
                </div>
                <div className='px-3 py-2 border flex items-center gap-2 border-gray-300 rounded-md'>
                    <i className="fa-solid fa-calendar"></i>
                    <p>{cardData.startDate} - {cardData.endDate} &bull; {cardData.time}</p>
                </div>
                <div className='px-3 border  py-2 flex items-center gap-2 border-gray-300 rounded-md'>
                    <i className="fa-solid fa-money-bill-wave"></i>
                    <p>Fee &bull; ₹ {cardData.fee}</p>
                </div>
            </div>
            <div className='lg:flex  mt-4 gap-12'>
                <div className='flex lg:w-[50%] flex-col gap-4 text-lg text-gray-700'>
                    <p className='text-black text-2xl font-bold'>{cardData.name}</p>
                    <div className='flex w-fit items-center text-red-500  px-3 py-2 border border-gray-300 rounded-md   gap-2'>
                        <i className="fa-solid fa-circle-xmark"></i>
                        <p>Deadline &bull; {cardData.deadline}</p>
                    </div>
                    <p>Tags</p>
                    <div className='flex w-fit text-blue-600 px-3 py-2 border border-gray-300 rounded-md  text-base gap-4'>
                        {
                            cardData.tags.map((item, index)=><Tags key={index} tag={item} detail={true}/>)
                        }
                    </div>
                    <p className='text-gray-700'>Eligibility</p>
                    <div className='flex  items-center text-green-600  gap-2 px-3 py-2 border w-fit border-gray-300 rounded-md'>
                        <i className="fa-solid fa-person-circle-check"></i>
                        <p className=''>{cardData.eligibility}</p>
                    </div>
                    
                    <p>Organized by</p>
                    <div className='px-3 w-fit rounded-md py-2 border border-gray-300'>
                        <Link to={'/profile'} className='flex gap-3 items-center'>
                            <img className='size-12 object-cover rounded-full' src="https://static.vecteezy.com/system/resources/previews/041/180/849/non_2x/technology-event-poster-editor_template.jpeg" alt="" />
                            <div>
                                <p className='font-medium text-black'>{cardData.hoster.name}</p>
                                <p>{cardData.hoster.type}</p>
                            </div>
                        </Link>
                    </div>
                    <p>Contact</p>
                    <div className=' w-fit flex flex-col gap-3 '>
                        {
                            cardData.contact.map((item)=>(
                                <Contactcard key={item.name} props={item} />
                            ))
                        }
                    </div>
                </div>
                <div>
                <div className='flex mt-4 lg:mt-0 h-fit rounded-md p-4 border border-gray-300  flex-col items-center gap-4'>
                    <p className='text-2xl font-bold'>{challenges?'Prize pool':'Chief guest'}</p>
                    <div className={`${challenges?'hidden':'flex'} flex-col items-center gap-2`}>
                        <img className='size-20 rounded-full object-cover' src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=" alt="" />
                        <div className='text-center'>
                            <p className='text-black text-xl font-medium'>{challenges?'':cardData.guest.name}</p>
                            <p className='text-gray-600 text-lg'>{challenges?'':cardData.guest.profession}</p>
                        </div>
                        <p className='font-medium'>Social links</p>
                        <div className='text-3xl mt-3 flex items-center gap-8 text-gray-700'>
                            <a  href={challenges?'':cardData.guest.link1} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                            <a href={challenges?'':cardData.guest.link2} target='_blank'><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>

                    <div className={`${challenges?'flex':'hidden'} flex-col items-center gap-2`}>
                    <div className='size-16 rounded-full flex justify-center items-center bg-gray-200'><i className="fa-solid fa-trophy text-4xl  text-[#FFD43B]"></i></div>
                        <div className='text-center'>
                            <p className='text-black text-xl font-medium'>Total prize</p>
                           <div className='text-gray-600 text-lg flex items-center gap-2'>
                            <i className="fa-solid fa-money-bill"></i>
                            <p className=''>&bull; ₹ {challenges?cardData.prize.totalPrize:''}</p>
                           </div>
                        </div>
                        <i className="fa-solid text-2xl fa-ranking-star"></i>
                        <div className='flex-col mt-3 flex items-center gap-2 text-gray-700'>
                            <p>Rank 1 &bull; {challenges?cardData.prize.rank1:''}</p>
                            <p>Rank 2 &bull; {challenges?cardData.prize.rank2:''}</p>
                            <p>Rank 3 &bull; {challenges?cardData.prize.rank3:''}</p>
                        </div>
                    </div>
                </div>

                    

                    <div className={` h-fit p-4 mt-6 gap-2 rounded-md border border-gray-300`}>
                        <p className={`${challenges?'hidden':'block'} text-2xl mb-2 font-bold text-center`}>Activities</p>
                        <div className={`${challenges?'hidden':'block'}`}>
                            {
                                challenges?'':cardData.activity.map((item)=>(
                                    <Activitycard key={item} item={item} />
                                ))
                            }
                        </div>
                        <div className={`${challenges?'block':'hidden'} text-lg text-gray-700`}>
                            <div >
                                <p>Duration</p>
                                <div className='items-center mt-1 gap-2 px-3 py-2 text-amber-700 border w-fit border-gray-300 rounded-md flex'>
                                    <i className="fa-solid fa-clock"></i>
                                    <p>&bull; {challenges?cardData.duration:''}</p>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <p className={`${challenges?'flex':'hidden'}`}>Team size</p>
                                <div className={`flex mt-1 items-center text-purple-600 gap-2 px-3 py-2 border w-fit border-gray-300 rounded-md`}>
                                    <i className="fa-solid fa-user-group"></i>
                                    <p>{challenges?cardData.teamSize:''}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center mt-10  gap-4'>
                        <button className=' px-6 py-3 bg-[#03045e] rounded-md text-lg text-white font-medium cursor-pointer'>Apply now</button>
                        <i onClick={()=>setWish(wish?false:true)} className={`${wish?'text-red-400':'text-gray-400'} ml-2 cursor-pointer text-2xl fa-solid fa-heart `}></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-10 border border-gray-300 p-4'>
            
            <div className='max-w-2xl'>
                <p className='text-xl font-medium'>Event details</p>
                <p className='text-start text-lg text-gray-700 px-3 py-2 border border-gray-300 rounded-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, alias perferendis nihil exercitationem reprehenderit in amet aut totam labore quae nulla nisi blanditiis earum tempore dolorum commodi. Corporis ducimus fugiat reprehenderit consequuntur fugit amet eligendi assumenda exercitationem a harum vitae deserunt voluptates delectus dolore aut autem quisquam, enim, voluptate sapiente.</p>
            </div>
      </div>
      </div>
      <div className='hidden lg:flex flex-col gap-6 '>
      <p className='text-xl font-bold text-gray-600'>More {challenges?'challenges':'events'} you may like</p>
        
        <Eventcards data={exploreData[ind1]} hackathon={challenges} ind={ind1}/>

        <Eventcards data={exploreData[ind2]} hackathon={challenges} ind={ind2}/>

        <Eventcards data={exploreData[ind3]} hackathon={challenges} ind={ind3}/>
      </div>
    </div>
    </>
  )
}

export default Eventdetails
