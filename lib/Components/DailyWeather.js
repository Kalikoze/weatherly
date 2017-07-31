import React from 'react';

export const DailyWeather = (props) => {
  console.log('props ', props);
  const weatherImage = props.weatherdata.icon;
  const image = `./lib/Assets/weather-condition-icons/${weatherImage}.svg`;
  const day = props.weatherdata.date.weekday;
  const high = props.weatherdata.high.fahrenheit;
  const low = props.weatherdata.low.fahrenheit;

  return (
   <div className='day'>
      <p className='day-name'>{day}</p>
      <img src={image} className='day-image'/>
      <p className='day-low'>Low: {low}°</p>
      <p className='day-high'>High: {high}°</p>
    </div>
  )
}
