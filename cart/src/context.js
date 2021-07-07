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

  return (
    <AppContext.Provider value={{cart, removeItem}}>{children}</AppContext.Provider>
  )
}

export { AppContext, AppProvider }
