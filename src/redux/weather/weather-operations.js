// const addTodoOperation = text => {
//   const todo = fetch('/todos');

//   return dispatch => {
//     dispatch(addTodo(todo));
//   };
// };

// const addTodoOperation = text => {
//   const todo = fetch('/todos');
//   dispatch(addTodo(todo));
// };

import {
  fetchWeatherRequest,
  fetchWeatherSuccess,
  fetchWeatherError,
} from './weather-actions';

const API_KEY = '4e94c4780f880da37a80d8b8508a2693';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = (longitude, latitude) => async dispatch => {
  dispatch(fetchWeatherRequest());

  //   const longitude = 21.2564815;
  //   const latitude = 48.7189942;

  // if don't use async-await
  // fetch().then().catch()

  try {
    const response = await fetch(
      `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
    );
    const data = await response.json();
    dispatch(fetchWeatherSuccess(data));
  } catch (error) {
    dispatch(fetchWeatherError(error));
  }
};
