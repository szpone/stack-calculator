import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Calculator from './components/Calculator.js';
import { Provider } from 'react-redux';

import { reducer, push, add, mul } from './calculator/reducer';

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.dispatch(push(2)); // [2]
store.dispatch(push(3)); // [2,3]
store.dispatch(push(4)); // [2,3,4]
store.dispatch(mul());   // [2,12]
store.dispatch(add());   // [14]

console.log(store.getState());

ReactDOM.render(<Provider store={store}><Calculator/></Provider>, document.getElementById('root'));
