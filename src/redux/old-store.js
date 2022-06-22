// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from '@redux-devtools/extension';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// in redux-toolkit under the hood is DevTools for Chrome. That's why package don't needed.

const store = configureStore({
  // instead of rootReducer - pass hole object? that was inside rootReducer
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  // devTools must be closed in production build. For 'development' - they are open.
  // console.log(process.env);
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
