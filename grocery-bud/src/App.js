import React, {useState} from 'react'
import Alert from './Alert'
import List from './List'

const App = () => {
  const [alert,setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  })
  const [isEditing,setIsEditing] = useState(false)
  const [name,setName] = useState('')
  const [list,setList] = useState([])

  const removeItems = () => {
    setList([])
    showAlert(true,'All Items Removed','danger')
  }
  const showAlert = (show=false,msg='',type='') => {
    setAlert({show,msg,type})
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!name) {
      showAlert(true,'Type something','danger')
    } else if(name && isEditing) {
      //edit the item
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList([...list,newItem])
      setName('')
      showAlert(true,'Item added','success')
    }
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} hideAlert={showAlert} />}
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
        <List items={list} />
        {
          list.length > 0 &&
          <button
          className='clear-btn'
          onClick={removeItems}>clear items</button>
        }

      </div>
    </section>
  );
}

export default App;
