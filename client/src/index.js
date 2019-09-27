import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';


import App from './components/App';
import reducers from './reducers'




const store = createStore( reducers,{},applyMiddleware());

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.querySelector('#root'));


//Including App within the provider tag helps to rerender the App component everytime provider tags have changes in the store
//Reducers are just a way to pass data to the redux
//Providers tag helps to pass updated data to all the components.
//createStore has three arguments - reducers (return value), {} (input), applyMiddleware (some mid stuff)