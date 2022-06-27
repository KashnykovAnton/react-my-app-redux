import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = '4e94c4780f880da37a80d8b8508a2693';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat: latitude, lon: longitude }) => {
    const response = await fetch(
      `${BASE_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
    );
    const data = await response.json();
    return data;
  },
);

// import {
//   fetchWeatherRequest,
//   fetchWeatherSuccess,
//   fetchWeatherError,
// } from './weather-actions';

// export const fetchWeather = (longitude, latitude) => async dispatch => {
//   dispatch(fetchWeatherRequest());

//   try {
//     const response = await fetch(
//       `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
//     );
//     const data = await response.json();
//     dispatch(fetchWeatherSuccess(data));
//   } catch (error) {
//     dispatch(fetchWeatherError(error));
//   }
// };
