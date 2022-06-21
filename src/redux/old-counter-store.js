import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import counterReducer from './counter/counter-reducer';

// ----- Step 1
// Example with initial state
// const reducer = (state = { a: 5 }, action) => state;
// const store = createStore(reducer, {a: 15});

// ----- Step 2
// Example with actions static and dynamic
// const reducer = (state = {}, action) => {
//   console.log('action in reducer: ', action);
//   return state;
// };

// ----- Step 3 - Counter
// const initialState = { counterValue: 0  };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'counter/Increment':
//       return { counterValue: state.counterValue + action.payload };
//     case 'counter/Decrement':
//       return { counterValue: state.counterValue - action.payload };
//     default:
//       return state;
//   }
// };

// ----- Step 4 - state is more difficult
// const initialState = {
//   counter: {
//     value: 0,
//     step: 5,
//   },
//   user: {},
//   todos: {},
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };
//     case 'counter/Decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// ----- Step 5 - Combine Reducers
// const counterInitialState = {
//   value: 0,
//   step: 5,
// };

// const counterReducer = (state = counterInitialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return { ...state, value: state.value + payload };
//     case 'counter/Decrement':
//       return { ...state, value: state.value - payload };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// ----- Step 6 - combine reducers with simple structure
// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case 'counter/Increment':
//       return { value: state + payload };
//     case 'counter/Decrement':
//       return { value: state - payload };
//     default:
//       return state;
//   }
// };

// const stepReducer = (step = 5, action) => step;

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// ----- Step 7 - refactoring
const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
