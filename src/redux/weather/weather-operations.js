import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'b39ad2fa3a751d1cbe3f46e239e6c6c0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const BASE_URL_FIVE_DAYS = 'https://api.openweathermap.org/data/2.5/forecast';
const errorCheck = data => {
  return (
    Number(data.cod) === 400 ||
    Number(data.cod) === 401 ||
    Number(data.cod) === 404 ||
    Number(data.cod) === 429
  );
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat: latitude, lon: longitude }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
      );
      const data = await response.json();
      if (errorCheck(data)) {
        throw new Error(data.message);
      }
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const fetchWeatherForFiveDays = createAsyncThunk(
  'weather/fetchWeatherForFiveDays',
  async ({ lat: latitude, lon: longitude }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL_FIVE_DAYS}?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
      );
      const data = await response.json();
      if (errorCheck(data)) {
        throw new Error(data.message);
      }
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);
