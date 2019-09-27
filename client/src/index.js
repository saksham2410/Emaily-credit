import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import App from './components/App';
import reducers from './reducers'
const ReduxThunk = require('redux-thunk').default;






const store = createStore( reducers,{},applyMiddleware(ReduxThunk));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.querySelector('#root'));


//Including App within the provider tag helps to rerender the App component everytime provider tags have changes in the store
//Reducers are just a way to pass data to the redux
//Providers tag helps to pass updated data to all the components.
//Action create initiates change inside the redux side of the application
//createStore has three arguments - reducers (return value), {} (input), applyMiddleware (some mid stuff)

//React component calls a action creater which produces a action and then sends it to dispatch function
//Dispatch sends the action to all the different reducers in the store, causing them to instantly recalculate the app state 