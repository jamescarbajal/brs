import { createStore } from 'redux';
import rootReducer from './reducer';

let preloadedState;

const persistedString = localStorage.getItem('cartItems');

if (persistedString) {
    preloadedState = {
        cartItems: JSON.parse(persistedString)
    };
};

const store = createStore(rootReducer, preloadedState);

export default store;