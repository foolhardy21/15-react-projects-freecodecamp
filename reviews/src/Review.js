import React, {useState} from 'react'
import data from './data'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from
'react-icons/fa'

const Review = () => {
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = data[index]

  const increaseIndex = () => {
    const currentIndex = index
    currentIndex === data.length-1 ? setIndex(0) :  setIndex(currentIndex+1)
  }
  const decreaseIndex = () => {
    const currentIndex = index
    currentIndex === 0 ? setIndex(data.length-1) : setIndex(currentIndex-1)
  }
  const randomIndex = () => {
    let newIndex = Math.floor(Math.random()*(data.length))
    if(newIndex === index) newIndex++
    if(newIndex === data.length) newIndex=0
    setIndex(newIndex)
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <button className='prev-btn' onClick={() => decreaseIndex()}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={() => increaseIndex()}>
        <FaChevronRight/>
      </button>
      <div>
        <button className='random-btn' onClick={() => randomIndex()}>surprise me</button>
      </div>

    </article>
  )
}

export default Review
