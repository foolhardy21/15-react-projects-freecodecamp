# Cart


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

The boilerplate code is provided consisting of CSS styling and the functionality is added on top of that using React.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- View and modify the changes in the cart items


## My process

### Built with

- useContext
- useReducer
- useEffect
- Conditional Rendering

### What I learned

I learnt how the context is created using 
``` const AppContext  = React.createContext() ``` 
and it is passed in the root component to be used by children components using 
``` import { AppProvider } from './context'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
); ```.
Along with this, i learnt how useReducer is used as follows 
``` const [state, dispatch] = useReducer(reducer, initialState) ``` 
and about the reducer.js file which deals with the state management depending on the action type. 