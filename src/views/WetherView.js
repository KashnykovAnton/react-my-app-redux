import React from 'react';
import Weather from '../components/Weather';
import Geolocator from 'components/Geolocator';
import { useSelector } from 'react-redux';
import { getLoading } from 'redux/weather/weather-selectors';

export default function WeatherView() {
  const isLoading = useSelector(getLoading);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && (
        <>
          <Geolocator />
          <Weather />
        </>
      )}
    </>
  );
}
