import React, {useState} from 'react'
import Categories from './Categories'
import Menu from './Menu'
import data from './data'

const App = () => {
  const [items,setItems] = useState(data)
  const [categories,setCategories] = useState([])

  const filterItems = (category) => {
    const newItems = items.filter(item =>
        item.category === category)

    setItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterMenu={filterItems}/>
        <Menu items={items}/>
      </section>
    </main>
  );
}

export default App;
