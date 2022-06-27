import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getLon,
  getLat,
  getCoord,
  getData,
} from 'redux/weather/weather-selectors';

import { fetchWeather } from 'redux/weather/weather-operations';

const Weather = () => {
  const longitude = useSelector(getLon);
  const latitude = useSelector(getLat);
  const data = useSelector(getData);
  const coord = useSelector(getCoord);

  const dispatch = useDispatch();

  useEffect(() => {
    if (coord.length !== 2) {
      return;
    }

    // dispatch(fetchWeather(longitude, latitude));
    dispatch(fetchWeather({ lat: latitude, lon: longitude }));
  }, [coord.length, dispatch, latitude, longitude]);

  const isEmpty = Object.keys(data).length === 0;

  return (
    <>
      {!isEmpty && (
        <div>
          <h2>Weather!</h2>
          <h3>City: {data.name}</h3>
          <p>{data.weather[0].description}</p>
          <ul>
            <li>temp: {data.main.temp}</li>
            <li>temp_feels_like: {data.main.feels_like}</li>
          </ul>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </div>
      )}
    </>
  );
};

export default Weather;
