import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
    console.log(action)
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

//state = {} defines the initial state as empty
//it exports the function having two argumetns = action and state. 