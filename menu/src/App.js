import React, {useState} from 'react'
import Categories from './Categories'
import Menu from './Menu'
import data from './data'

const App = () => {
  const [items,setItems] = useState(data)
  const [categories,setCategories] = useState([])

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories />
        <Menu items={items}/>
      </section>
    </main>
  );
}

export default App;
