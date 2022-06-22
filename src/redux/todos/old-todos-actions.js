import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
// import { ADD, DELETE, CHANGE_FILTER } from './todos-types';

// function createAction(type, prepareAction?)
// prepareAction is used for more complex structure in action, like my addTodo

export const addTodo = createAction('todos/Add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));

// export const addTodo = text => ({
//   type: ADD,
//   payload: {
//     id: shortid.generate(),
//     text,
//     completed: false,
//   },
// });

export const deleteTodo = createAction('todos/delete');

// export const deleteTodo = todoId => ({
//   type: DELETE,
//   payload: todoId,
// });

export const changeFilter = createAction('todos/changeFilter');

// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
