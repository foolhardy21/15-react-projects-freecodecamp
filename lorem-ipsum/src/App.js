import React, {useState} from 'react'
import data from './data.js'

const App = () => {

  const [count,setCount] = useState(0)
  const [text,setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const changeCount = (e) => setCount(e.target.value)


  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label className='label' htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          id='amount'
          className='input'
          onChange={changeCount}
          // value={count}
        />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        <p>sample text kasdfsadhljdsvhj</p>
      </article>
    </section>
  );

}

export default App;
