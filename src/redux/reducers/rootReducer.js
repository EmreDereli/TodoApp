import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';

const allReducers = {
  todoReducer,
  userReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
