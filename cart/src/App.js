import React, { useContext } from 'react'
import { AppContext } from './context'
import NavBar from './NavBar'
import CartContainer from './CartContainer'

const App = () => {
  const { loading } = useContext( AppContext )

  if( loading ) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
