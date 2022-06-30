import './WeatherCard.scss';

const WeatherCard = ({ data = {}, weatherDate = {} }) => {
  const degreeCelsius = '\u2103';

  return (
    <div className="ContainerCard">
      <div className="Card">
        <p>{weatherDate.localizedDate}</p>
        <p>{weatherDate.localizedTime}</p>
        <div className="Card__weather">
          <div className="Card__weather--left">
            <div className="Card__weather--temp">
              <p>
                Temp: {data.main.temp} {degreeCelsius}
              </p>
              <p>
                Temp "feels like": {data.main.feels_like} {degreeCelsius}
              </p>
              <p>
                Temp min: {data.main.temp_min} {degreeCelsius}
              </p>
              <p>
                Temp max: {data.main.temp_max} {degreeCelsius}
              </p>
            </div>
            <div className="Card__weather--cloud">
              <p>Cloudiness: {data.clouds.all} %</p>
            </div>
          </div>
          <div className="Card__weather--right">
            <div className="Card__weather--humidity">
              <p>Humidity: {data.main.humidity} %</p>
              <p>Atmosph. press.: {data.main.humidity} hPa</p>
            </div>
            <div className="Card__weather--wind">
              <p>Wind speed: {data.wind.speed} meter/sec</p>
              <p>
                Wind direction: {data.wind.deg} {'\u00B0'}
              </p>
              <p>Wind gust: {data.wind.gust} meter/sec</p>
            </div>
          </div>
          <div className="Card__weather--info">
            <div>
              <h3>{data.weather[0].main}</h3>
              <p>Description: {data.weather[0].description}</p>
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
