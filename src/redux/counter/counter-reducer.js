import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './counter-types';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { value: state + payload };
    case DECREMENT:
      return { value: state - payload };
    default:
      return state;
  }
};

const stepReducer = (step = 5, action) => step;

//   const counterReducer = combineReducers({
//     value: valueReducer,
//     step: stepReducer,
//   });

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
