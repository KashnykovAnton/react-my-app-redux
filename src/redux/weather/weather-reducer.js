import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addLon, addLat } from './weather-actions';
import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherError,
} from './weather-actions';

const coordReducer = createReducer([], {
  [addLon]: (state, action) => [...state, action.payload],
  [addLat]: (state, action) => [...state, action.payload],
});

// const dataReducer = createReducer([], {
//   [addData]: (state, action) => [...state, action.payload],
// });

const dataReducer = createReducer(
  {},
  {
    [fetchWeatherSuccess]: (_, action) => action.payload,
  },
);

const loadingReducer = createReducer(false, {
  [fetchWeatherRequest]: () => true,
  [fetchWeatherSuccess]: () => false,
  [fetchWeatherError]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchWeatherError]: (_, action) => action.payload,
  [fetchWeatherRequest]: () => null,
});

export default combineReducers({
  coord: coordReducer,
  data: dataReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});

// weather {
//     coord{
//         lan: 555,
//         lat: 666,
//     }

//     data {

//     }
// }
