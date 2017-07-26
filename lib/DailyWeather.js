import React from 'react';
import MockData from './mockData';

export default class DailyWeather extends React.Component {
  constructor(props) {
    super()
    this.state = {
      image: props.weatherdata.icon_url,
      day: props.weatherdata.date.weekday,
      high: props.weatherdata.high.fahrenheit,
      low: props.weatherdata.low.fahrenheit,
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
