import React, {useState} from 'react'
import data from './data.js'

const App = () => {

  const [count,setCount] = useState(0)
  const [text,setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const countInt = parseInt(count)
    if(countInt>0) {
      setText(data.slice(0,countInt))
    } else if (countInt === 0) {
      setText([])
    } else if (countInt > data.length) {
      setText(data)
    } else {
      setText(data.slice(0,1))
    }


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
        />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item,index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );

}

export default App;
