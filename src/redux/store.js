import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';
import weatherReducer from './weather/weather-reducer';
import { pokemonApi } from './pokemon/pokemon';
import { postApi } from './posts/post';

const myMiddleware = store => next => action => {
  console.log('My middleware!');
  next(action);
};

const basicMiddleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(myMiddleware, logger, pokemonApi.middleware, postApi.middleware);

const todosPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: persistReducer(todosPersistConfig, todosReducer),
    weather: weatherReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: basicMiddleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
