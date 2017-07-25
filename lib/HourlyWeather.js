import React from 'react';
import MockData from './mockData'

export default class HourlyWeather extends React.Component {
  constructor(props) {
    super();

    this.state = {
      image: MockData.hourly_forecast[props.index].icon_url,
      temperature: MockData.hourly_forecast[props.index].temp.english,
      hour: MockData.hourly_forecast[props.index].FCTTIME.civil,
    }
  }

  render() {
    const {image, temperature, hour} = this.state;

    return (
      <div className = "hourly-card">
        <p className = "hour">{hour}</p>
        <img src= {image} className = "hourly-image"/>
        <p className = "hourly-temperature"> {temperature}° </p>
      </div>
    )
  }
}
