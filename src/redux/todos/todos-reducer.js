import { combineReducers } from 'redux';
import { ADD, DELETE, CHANGE_FILTER } from './todos-types';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];

    case DELETE:
      return state.filter(todo => todo.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
