import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getLon,
  getLat,
  getData,
  getDataFiveDays,
  getDataFiveDaysList,
  getCoordLength,
} from 'redux/weather/weather-selectors';

import {
  fetchWeather,
  fetchWeatherForFiveDays,
} from 'redux/weather/weather-operations';
import WeatherCard from 'components/WeatherCard/WeatherCard';

const Weather = () => {
  const longitude = useSelector(getLon);
  const latitude = useSelector(getLat);
  const data = useSelector(getData);
  const dataFiveDays = useSelector(getDataFiveDays);
  const dataFiveDaysList = useSelector(getDataFiveDaysList);
  const length = useSelector(getCoordLength);

  const dispatch = useDispatch();

  useEffect(() => {
    if (length !== 2) {
      return;
    }

    // dispatch(fetchWeather(longitude, latitude));
    dispatch(fetchWeather({ lat: latitude, lon: longitude }));
  }, [length, dispatch, latitude, longitude]);

  const onFetchWeatherForFiveDays = () => {
    dispatch(fetchWeatherForFiveDays({ lat: latitude, lon: longitude }));
  };

  const isEmptyDataFiveDays = Object.keys(dataFiveDays).length === 0;
  // const isEmptyDataFiveDays = dataFiveDays.length === 0;

  const isEmptyData = Object.keys(data).length === 0;
  // const isEmptyData = data.length === 0;

  return (
    <>
      {!isEmptyData && (
        <div>
          <WeatherCard {...{ data }} />
        </div>
      )}
      <button type="button" onClick={onFetchWeatherForFiveDays}>
        Get weather on 5 days
      </button>
      {!isEmptyDataFiveDays && (
        <>
          <div style={{ textAlign: 'center' }}>
            <h2>{dataFiveDays.city.country}</h2>
            <h2>{dataFiveDays.city.name}</h2>
          </div>
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: '0',
            }}
          >
            {dataFiveDaysList &&
              dataFiveDaysList.map(data => {
                const unixTimestamp = data.dt;
                const date = new Date(unixTimestamp * 1e3); // 1e3 === 1000
                const localizedDate = date.toLocaleDateString('en', {
                  dateStyle: 'medium',
                });
                const localizedTime = date.toLocaleTimeString('en', {
                  timeStyle: 'short',
                });
                const weatherDate = { localizedDate, localizedTime };
                console.log(localizedDate);
                return <WeatherCard key={data.dt} {...{ data, weatherDate }} />;
              })}
          </ul>
        </>
      )}
    </>
  );
};

export default Weather;
