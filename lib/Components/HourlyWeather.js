import React from 'react';

export const HourlyWeather = props => {
  const weatherImage = props.weatherData.icon;
  const image = `./lib/Assets/weather-condition-icons/${weatherImage}.svg`;
  const temperature = props.weatherData.temp.english;
  const hour = props.weatherData.FCTTIME.civil;

  return (
    <div className="hourly-card">
      <p className="hour">
        {hour}
      </p>
      <img src={image} className="hourly-image" />
      <p className="hourly-temperature">
        {temperature}°
      </p>
    </div>
  );
};
