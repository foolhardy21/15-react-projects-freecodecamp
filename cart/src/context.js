import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext  = React.createContext()

const AppProvider = ({ children }) => {

  const [cart, setCart] = useState(cartItems)

  const removeItem = (id) => {
    const newCart = cart.filter(item => item.id !== id )
    setCart(newCart)
  }
  const removeAllItems = () => {
    setCart([])
  }
  const increaseQty = (itemId) => {
    const newCart = cart.map((item) => {
      const {id,title,price,img,amount} = item

      if(id == itemId) {
        return {...item, amount: amount + 1}
      } else {
        return item
      }
    })
    setCart(newCart)
  }
  const decreaseQty = (itemId) => {
    const newCart = cart.map((item) => {
      const {id,title,price,img,amount} = item

      if(id == itemId && amount > 0 ) {
        return {...item, amount: amount - 1}
      } else {
        return item
      }
    })
    setCart(newCart)
  }

  return (
    <AppContext.Provider value={{
      cart,
      removeItem,
      removeAllItems,
      increaseQty,
      decreaseQty}}
      >
      {children}</AppContext.Provider>
  )
}

export { AppContext, AppProvider }
