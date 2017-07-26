import React from 'react';

export default class HourlyWeather extends React.Component {
  constructor(props) {
    console.log(props)
    super();
    this.state = {
      image: props.weatherData.icon_url,
      temperature: props.weatherData.temp.english,
      hour: props.weatherData.FCTTIME.civil,
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
