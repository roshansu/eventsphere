import React from 'react'
import { Link } from 'react-router'
import Eventcards from './Eventcards'
import data from '../utils/Dummy'

const Eventcard = ({hackathon, explore, filter, index}) => {
    console.log(hackathon, 'eventcards')
    let cardData = [];
    if(!hackathon){
        cardData = data[0];
    }else{
      cardData = data[1];
    }
    const ind1 = Math.floor(Math.random() * cardData.length)
    const ind2 = Math.floor(Math.random() * cardData.length)
    const ind3 = Math.floor(Math.random() * cardData.length)

  if(explore)
  return (
    <div className='flex flex-wrap gap-10  justify-center  '>
        <Eventcards data={cardData[ind1]} ind={ind1} key={cardData[ind1].id} hackathon={hackathon} />
        <Eventcards data={cardData[ind2]} ind={ind2} key={cardData[ind2].id} hackathon={hackathon} />
        {index?<Eventcards data={cardData[ind3]} ind={ind3} key={cardData[ind3].id} hackathon={hackathon} />:''}
    </div>
  )
  if(filter!=='all'){
    cardData = cardData.filter((item)=>{
      return item.category.includes(filter)
    })
  }

  console.log('cardData',cardData)
  if(!explore)
  return (
    <div className='flex flex-wrap gap-10  justify-evenly lg:justify-center  '>
        {
          cardData.map((item, index)=>{
            return <Eventcards ind={index} data={item} key={item.name} hackathon={hackathon} />
          })
        }
    </div>
  )
}

export default Eventcard
