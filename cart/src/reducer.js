const reducer = (state, action) => {
    switch ( action.type ) {
        case 'CLEAR_CART': 
                return { ...state, cart: [] }
        case 'REMOVE_ITEM': 
                return { ...state, cart: state.cart.filter(item => item.id !== action.payload) } 
        case 'INCREASE':
                return { ...state, cart: state.cart.map((item) => {
                    if(item.id == action.payload) {
                        return { ...item, amount: item.amount + 1 }
                    } else 
                    return item
                }) }
        case 'DECREASE':
            return { ...state, cart: state.cart.map((item) => {
                if(item.id == action.payload) {
                    return { ...item, amount: item.amount - 1 }
                } else 
                return item
            }).filter(item => item.amount !== 0) }
    }
}

export default reducer