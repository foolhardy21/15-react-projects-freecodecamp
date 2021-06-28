import React, {useState} from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

const App = () => {

  const [color,setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
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
          placeholder='Type hex...'/>
          <button className='btn' type='submit'>submit</button>
        </form>
      </section>
      <section className='colors'>
        <h4>List of colors</h4>
      </section>

    </div>
  );
}

export default App;
