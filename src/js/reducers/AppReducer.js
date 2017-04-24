import { Map } from 'immutable';
import { AppActionTypes } from '../constants/AppActionTypes';

const initialState = Map({
  title: 'React app',
  name: 'Johnny Appleseed',
});

const AppReducer = (state = initialState, action) => {

  switch(action.type) {

    case AppActionTypes.SAY_HELLO:
      return state.set('name', action.name);

    default:
      return state;
  }
};

export default AppReducer;

