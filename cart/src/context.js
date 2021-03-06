import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

// const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext  = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const removeItem = (id) => {
    dispatch( { type: 'REMOVE_ITEM', payload: id } )
  }
  const increaseAmt = (id) => {
    dispatch( {type: 'INCREASE', payload: id} )
  }
  const decreaseAmt = (id) => {
    dispatch( {type: 'DECREASE', payload: id} )
  }
  useEffect( ()=> {
    console.log('changed')
    dispatch( {type: 'GET_TOTAL'} )
  },[state.cart])

  return (
    <AppContext.Provider 
    value={{
      ...state,
      clearCart,
      removeItem,
      increaseAmt,
      decreaseAmt
      }}
      >
      {children}</AppContext.Provider>
  )
}

export { AppContext, AppProvider }
