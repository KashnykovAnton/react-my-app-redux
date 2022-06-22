import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('todos/Add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));

export const deleteTodo = createAction('todos/delete');

export const changeFilter = createAction('todos/changeFilter');

export const toggleCompleted = createAction('todos/toggleCompleted');
