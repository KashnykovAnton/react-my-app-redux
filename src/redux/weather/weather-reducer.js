import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addLon, addLat } from './weather-actions';
// import {
//   fetchWeatherRequest,
//   fetchWeatherSuccess,
//   fetchWeatherError,
// } from './weather-actions';
import { fetchWeather } from './weather-operations';

const coordReducer = createReducer([], {
  [addLon]: (state, action) => [...state, action.payload],
  [addLat]: (state, action) => [...state, action.payload],
});

const dataReducer = createReducer(
  {},
  {
    [fetchWeather.fulfilled]: (_, action) => action.payload,
  },
);

const loadingReducer = createReducer(false, {
  [fetchWeather.pending]: () => true,
  [fetchWeather.fulfilled]: () => false,
  [fetchWeather.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchWeather.rejected]: (_, action) => action.payload,
  [fetchWeather.pending]: () => null,
});

export default combineReducers({
  coord: coordReducer,
  data: dataReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});

// const dataReducer = createReducer(
//     {},
//     {
//       [fetchWeatherSuccess]: (_, action) => action.payload,
//     },
//   );

//   const loadingReducer = createReducer(false, {
//     [fetchWeatherRequest]: () => true,
//     [fetchWeatherSuccess]: () => false,
//     [fetchWeatherError]: () => false,
//   });

//   const errorReducer = createReducer(null, {
//     [fetchWeatherError]: (_, action) => action.payload,
//     [fetchWeatherRequest]: () => null,
//   });
