import React, {useState} from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

const App = () => {

  const [color,setColor] = useState('')
  const [error,setError] = useState(false)
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    try{
      const colors = new Values(color).all(10)
      setList(colors)
    } catch(e) {
      setError(true)
    }
  }

  return (
    <div>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
          type='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='Type hex...'
          className={`${error ? 'error' : null}`} />
          <button className='btn' type='submit'>submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color,index) => {
          console.log(color)
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>

    </div>
  );
}

export default App;
