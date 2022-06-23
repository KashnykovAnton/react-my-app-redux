import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTodo,
  deleteTodo,
  changeFilter,
  toggleCompleted,
} from './todos-actions';

const itemsReducer = createReducer([], {
  [addTodo]: (state, action) => [...state, action.payload],
  [deleteTodo]: (state, action) =>
    state.filter(todo => todo.id !== action.payload),
  [toggleCompleted]: (state, action) =>
    state.map(todo =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo,
    ),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
