import React from 'react'

const Person = ({person}) => {

  const {id,name,age,image} = person;

  return (
    <article className='person'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} Years</p>
      </div>
    </article>
  )
}

export default Person
