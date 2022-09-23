const initialState = {
    cartItems: [
        {
            id: '',
            quantity: '',
        }
    ]
}

export default function rootReducer(state = {}, action) {
    switch (action.type) {
        case 'cart/addToCart': {
            return {

            }
        }
    }
}