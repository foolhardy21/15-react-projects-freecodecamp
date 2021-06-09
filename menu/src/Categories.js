import React from 'react'

const Categories = ({filterMenu}) => {
  return (
    <div className='btn-container'>
      <button className='filter-btn'
        onClick={() => filterMenu('lunch')}>
        lunch
      </button>
    </div>
  )
}

export default Categories
