import React, {useState} from 'react'
import Categories from './Categories'
import Menu from './Menu'
import data from './data'

const allCategories = [...new Set(data.map(item => item.category))]
allCategories.unshift('all')

const App = () => {
  const [items,setItems] = useState(data)
  const [categories,setCategories] = useState([...allCategories])

  const filterItems = (category) => {
    
    if(category==='all') {
      setItems(data)
      return;
    }
    const newItems = data.filter(item =>
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
        <Categories categories={categories} filterMenu={filterItems}/>
        <Menu items={items}/>
      </section>
    </main>
  );
}

export default App;
