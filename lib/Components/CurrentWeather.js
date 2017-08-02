import React from 'react';

export const CurrentWeather = (props) =>  {

    const weatherImage = props.weatherData.current_observation.icon
    const city = props.weatherData.location.city + ', ' + props.weatherData.location.state
    const date = props.weatherData.forecast.simpleforecast.forecastday[0].date.pretty
    const currentTemp = props.weatherData.current_observation.temp_f
    const dailyLow = props.weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit
    const dailyHigh = props.weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit
    const description = props.weatherData.forecast.txt_forecast.forecastday[0].fcttext
    const image = `./lib/Assets/weather-condition-icons/${weatherImage}.svg`

    return (
      <div className="currentWeather">
        <div className='city-and-date'>
          <h1 className='current-city'> {city} </h1>
          <h3 className='current-date'> {date} </h3>
        </div>
        <img src={image} className='current-image'/>
        <h2 className='current-temp'> {currentTemp}° </h2>
        <div className='low-high'>
          <h4 className='daily-low'> Low: {dailyLow}° </h4>
          <h4 className='daily-high'> High: {dailyHigh}° </h4>
        </div>
        <p className='description'> {description} </p>
      </div>
    )
}
