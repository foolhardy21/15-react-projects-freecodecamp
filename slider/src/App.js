import React, { useState } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

const App = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  function increaseIndex() {
    let newIndex = -1;
    if(index === people.length-1) newIndex=0;
    else newIndex=index+1

    setIndex(newIndex)
  }
  function decreaseIndex() {
    let newIndex = -1;
    if(index === 0) newIndex=people.length-1;
    else newIndex=index-1

    setIndex(newIndex)
  }
  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>reviews</h2>
      </div>
      <div className='section-center'>
        {
          people.map((person,personIndex) => {
            const { id, image, name, title, quote } = person
            //console.log(name)
            let position = 'nextSlide'
            if(personIndex === index) {
              position='activeSlide'
            }
            if(personIndex === index-1 || (personIndex === people.length-1 && index===0)) {
              position = 'lastSlide'
            }
            return (
              <article key={id} className={position}>
                <img src={image} alt={name} className='person-img' />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <FaQuoteRight className='icon'/>
              </article>
            )
          })
        }
        <button className='prev' onClick={decreaseIndex}><FiChevronLeft/></button>
        <button className='next' onClick={increaseIndex}><FiChevronRight/></button>
      </div>
    </section>
  );
}

export default App;
