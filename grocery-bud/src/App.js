import React, {useState} from 'react'
import Alert from './Alert'
import List from './List'

const App = () => {
  const [alert,setAlert] = useState(false)
  const [isEditing,setIsEditing] = useState(false)
  const [name,setName] = useState('')
  const [list,setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert && <Alert />}
        <h3>grocery bud</h3>
        <div className='form-control'>
        <input
        type='text'
        className='grocery'
        placeholder='e.g: milk '
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' className='submit-btn'>
          {isEditing ? 'edit' : 'submit'}
        </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>clear items</button>
      </div>
    </section>
  );
}

export default App;
