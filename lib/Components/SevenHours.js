import React from 'react';
import HourlyWeather from './HourlyWeather'

export const SevenHours = (props) => {
  const hourlyArray = props.weatherData.hourly_forecast.splice(0, 7)
  return (
      <div className="hourly-weather">
        {
          hourlyArray.map((hour, i) =>
              <HourlyWeather weatherData={hour} index={i} key={i} />
          )
        }
      </div>
   )
}
