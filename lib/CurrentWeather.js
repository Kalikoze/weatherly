import React from 'react';
import MockData from './mockData';

export default class CurrentWeather extends React.Component {
  constructor(props) {
    super();

    this.state = {
      place: MockData.current_observation.display_location.full,
      date: MockData.forecast.simpleforecast.forecastday[0].date.pretty,
      currentTemp: MockData.current_observation.temp_f,
      dailyLow: MockData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      dailyHigh: MockData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      description: MockData.forecast.txt_forecast.forecastday[0].fcttext,
      image: MockData.current_observation.icon_url,
    }
  }

  render() {
    const { place, date, currentTemp, dailyLow, dailyHigh, description, image } = this.state
    return (
      <div className="currentWeather">
        <div className='city-and-date'>
          <h2 className='current-city'> {place} </h2>
          <h2 className='current-date'> {date} </h2>
        </div>
        <img src={image} className='current-image'/>
        <h2 className='currentTemp'> {currentTemp}° </h2>
        <div className='low-high'>
          <h2 className='daily-low'> Low: {dailyLow}° </h2>
          <h2 className='daily-high'> High: {dailyHigh}° </h2>
        </div>
        <h2 className='description'> {description} </h2>
      </div>
    )
  }
}
