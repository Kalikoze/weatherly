import React from 'react';
import HourlyWeather from './HourlyWeather'

export default class SevenHours extends React.Component {
  render() {
    const hourlyWeather = {
      hour: "2 pm",
      temperature: '96°',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Weather-more-clouds.svg'
    }

    const {hour, temperature, image} = hourlyWeather;

    return (
      <div className="hourly-weather">
        <HourlyWeather hour={hour} temperature={temperature} image={image} />
        <HourlyWeather hour={hour} temperature={temperature} image={image} />
        <HourlyWeather hour={hour} temperature={temperature} image={image} />
        <HourlyWeather hour={hour} temperature={temperature} image={image} />
        <HourlyWeather hour={hour} temperature={temperature} image={image} />
        <HourlyWeather hour={hour} temperature={temperature} image={image} />
        <HourlyWeather hour={hour} temperature={temperature} image={image} />
      </div>
   )
  }
}
