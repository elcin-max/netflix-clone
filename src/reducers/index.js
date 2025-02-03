// src/reducers/index.js (Root Reducer)
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer, // Add more reducers here if needed
});

export default rootReducer;