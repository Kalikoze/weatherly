import React from 'react';

export default class CurrentWeather extends React.Component {
  constructor(props) {
    super();

    const weatherImage = props.weatherData.current_observation.icon
    console.log(weatherImage)

    this.state = {
      city: props.weatherData.location.city,
      date: props.weatherData.forecast.simpleforecast.forecastday[0].date.pretty,
      currentTemp: props.weatherData.current_observation.temp_f,
      dailyLow: props.weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      dailyHigh: props.weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      description: props.weatherData.forecast.txt_forecast.forecastday[0].fcttext,
      image: `./lib/Assets/weather-condition-icons/${weatherImage}.svg`
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
