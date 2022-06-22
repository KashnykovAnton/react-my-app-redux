import shortid from 'shortid';
import { ADD, DELETE, CHANGE_FILTER } from './todos-types';

export const addTodo = text => ({
  type: ADD,
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
});

export const deleteTodo = todoId => ({
  type: DELETE,
  payload: todoId,
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});
