import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

// in last version toolkit - getDefaultMiddleware - under the hood in configureStore
// middlewares ORDER is very IMPORTANT!!!
console.log(getDefaultMiddleware());

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
