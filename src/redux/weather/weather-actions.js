import { createAction } from '@reduxjs/toolkit';

export const addLon = createAction('weather/addLon');

export const addLat = createAction('weather/addLat');

// ------ With AsyncThunk - don't need actions for fetch! ------

// // pending
// export const fetchWeatherRequest = createAction('weather/fetchWeatherRequest');

// // fulfilled
// export const fetchWeatherSuccess = createAction('weather/fetchWeatherSuccess');

// // rejected
// export const fetchWeatherError = createAction('weather/fetchWeatherError');
