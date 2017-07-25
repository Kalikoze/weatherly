import React from 'react';
import MockData from './mockData';

export default class DailyWeather extends React.Component {
  constructor(props) {
    super()
    this.state = {
      image: MockData.forecast.simpleforecast.forecastday[props.index].icon_url,
      day: MockData.forecast.simpleforecast.forecastday[props.index].date.weekday,
      high: MockData.forecast.simpleforecast.forecastday[props.index].high.fahrenheit,
      low: MockData.forecast.simpleforecast.forecastday[props.index].low.fahrenheit,
    }
  }

  render() {
    const {image, day, high, low} = this.state
    return (
     <div className='day'>
        <p className='day-name'>{day}</p>
        <img src={image} className='day-image'/>
        <p className='day-high'>{high}°</p>
        <p className='day-low'>{low}°</p>
      </div>
    )
  }
}
