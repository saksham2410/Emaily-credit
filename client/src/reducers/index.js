import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer
});

//auth is the key of state is produced by authReducer

//combineReducer is just to combine all the reducers and map key (state ) and reducers