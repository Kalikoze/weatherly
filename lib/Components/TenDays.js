import React from 'react';
import DailyWeather from './DailyWeather';

export const TenDays = (props) => {
  return (
      <div className='daily-forecast'>
      {
          props.weatherData.forecast.simpleforecast.forecastday.map( (day, i) =>
              <DailyWeather index={i} key={i} weatherdata={day} />
          )

      }
      </div>
  )
}
