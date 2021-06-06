import React, {useState} from 'react'
import data from './data'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from
'react-icons/fa'

const Review = () => {
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = data[index]

  const increaseIndex = () => {
    const currentIndex = index
    setIndex(currentIndex+1)
  }
  const decreaseIndex = () => {
    const currentIndex = index
    setIndex(currentIndex-1)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} class='person-img' />
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
        <button className='random-btn'>surprise me</button>
      </div>

    </article>
  )
}

export default Review
