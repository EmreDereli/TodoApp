import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
const allReducers = {
  todoReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
