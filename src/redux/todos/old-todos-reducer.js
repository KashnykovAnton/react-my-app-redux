import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import { ADD, DELETE, CHANGE_FILTER } from './todos-types';
import { addTodo, deleteTodo, changeFilter } from './todos-actions';

const itemsReducer = createReducer([], {
  [addTodo]: (state, action) => [...state, action.payload],
  [deleteTodo]: (state, action) =>
    state.filter(todo => todo.id !== action.payload),
});

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];

//     case DELETE:
//       return state.filter(todo => todo.id !== payload);
//     default:
//       return state;
//   }
// };

const filterReducer = createReducer('', {
  // [changeFilter]: (state, action) => action.payload,
  [changeFilter]: (_, action) => action.payload,
});

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
