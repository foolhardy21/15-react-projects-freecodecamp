import React, {useState} from 'react'
import data from './data'

const Review = () => {
  const [index,setIndex] = useState(2)
  const {name,job,image,text} = data[index]

  return (
    <div>{name}</div>
  )
}

export default Review
