import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import AppReducer from './AppReducer';

const rootReducer = combineReducers({
  AppReducer,
  routing,
});

export default rootReducer;
