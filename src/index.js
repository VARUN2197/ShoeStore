import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CartReducer from './reducers/CartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(CartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, 
    document.getElementById('root')
);


