import {
  configureStore,
  // getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';
import weatherReducer from './weather/weather-reducer';

// in last version toolkit - getDefaultMiddleware - under the hood in configureStore
// middlewares ORDER is very IMPORTANT!!!
// console.log(getDefaultMiddleware());

// Construction of middleware
// const myMiddleware = store => next => action => {}
// function myMiddleWare (store) {
//   return function (next) {
//     return function (action) {
//       // body
//     }
//   }
// }

const myMiddleware = store => next => action => {
  console.log('My middleware!');
  next(action);
};

const basicMiddleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(myMiddleware, logger);

// solution with other writing
// const basicMiddleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   myMiddleware,
//   logger,
// ];

const todosPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// const persistedReducer = persistReducer(todosPersistConfig, rootReducer);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: {
    counter: counterReducer,
    todos: persistReducer(todosPersistConfig, todosReducer),
    weather: weatherReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  middleware: basicMiddleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// export default { store, persistor };
