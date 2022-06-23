import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { incrementCounter, decrementCounter } from './counter-actions';

const valueReducer = createReducer(0, {
  [incrementCounter]: (state, action) => state + action.payload,
  [decrementCounter]: (state, action) => state - action.payload,
});

const stepReducer = createReducer(5, (state, action) => state);

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
