import React from 'react';

export default class CurrentWeather extends React.Component {
  constructor(props) {
    super();

    this.state = {
      city: props.location,
      date: props.date,
      currentTemp: props.currentTemp,
      dailyLow: props.dailyLow,
      dailyHigh: props.dailyHigh,
      description: props.description,
      image: props.image
    }
  }

  render() {
    const { city, date, currentTemp, dailyLow, dailyHigh, description, image } = this.state
    return (
      <div className="currentWeather">
        <div className='city-and-date'>
          <h2 className='current-city'> {city} </h2>
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
