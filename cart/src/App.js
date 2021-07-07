import React from 'react'
import { AppContext } from './context'
import NavBar from './NavBar'
import CartContainer from './CartContainer'

const App = () => {
  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
