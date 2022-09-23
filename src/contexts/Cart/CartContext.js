import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = (props) => {

    const [ cartItems, setCartItems ] = useState( JSON.parse(localStorage.getItem('CART_ITEMS')) || "" );

    useEffect( () => {
        localStorage.setItem('CART_ITEMS', JSON.stringify(cartItems));
    }, [cartItems]);

    return(
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {props.children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };