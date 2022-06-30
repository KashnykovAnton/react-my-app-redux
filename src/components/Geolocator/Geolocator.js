import { useSelector, useDispatch } from 'react-redux';
import { addLon, addLat } from 'redux/weather/weather-actions';
import {
  getLon,
  getLat,
  getCoordLength,
} from 'redux/weather/weather-selectors';

const Geolocator = () => {
  const dispatch = useDispatch();

  const longitude = useSelector(getLon);
  const latitude = useSelector(getLat);
  const length = useSelector(getCoordLength);

  window.onload = geolocate();

  function geolocate() {
    navigator.geolocation.getCurrentPosition(
      onGetPositionSuccess,
      onGetPositionError,
    );
  }

  function onGetPositionSuccess({ coords: { longitude, latitude } }) {
    if (length < 2) {
      dispatch(addLon(longitude));
      dispatch(addLat(latitude));
    }
  }

  function onGetPositionError() {
    console.log('Sorry, no position available.');
  }

  return (
    <div>
      <p>Your coordinates are:</p>
      <ul>
        <li>longitude - {longitude}</li>
        <li>latitude - {latitude}</li>
      </ul>
    </div>
  );
};

export default Geolocator;
