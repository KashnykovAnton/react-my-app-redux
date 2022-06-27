import { createAction } from '@reduxjs/toolkit';

// const asyncActionCreator = args => dispatch => {
//   // http
// };

// dispatch(asyncActionCreator(5));

export const addLon = createAction('weather/addLon');

export const addLat = createAction('weather/addLat');

// export const addData = createAction('weather/addData');

// pending
export const fetchWeatherRequest = createAction('weather/fetchWeatherRequest');

// fulfilled
export const fetchWeatherSuccess = createAction('weather/fetchWeatherSuccess');

// rejected
export const fetchWeatherError = createAction('weather/fetchWeatherError');
