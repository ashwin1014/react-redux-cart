import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
const initialState = {};

if(localStorage.getItem('cartItems')) {
    initialState.cart = {items: JSON.parse(localStorage.getItem('cartItems'))}
}

const composeEnhancer = typeof window === 'object' &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

export default createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));