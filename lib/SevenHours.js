import React from 'react';
import HourlyWeather from './HourlyWeather'
import MockData from './mockData'

export default class SevenHours extends React.Component {
  render() {
    const hourlyWeather = {
      hour: "2 pm",
      temperature: '96°',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Weather-more-clouds.svg'
    }

    const {hour, temperature, image} = hourlyWeather;
    const hourlyArray = MockData.hourly_forecast.splice(0, 7);

    return (
      <div className="hourly-weather">
        {
          hourlyArray.map((hour, i) =>
              <HourlyWeather key={i} index={i} hour={hour} temperature={temperature} image={image} />
          )
        }
      </div>
   )
  }
}
