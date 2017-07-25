import React from 'react';

export default class HourlyWeather extends React.Component {
  constructor(props) {
    super();

    this.state = {
      image: props.image,
      temperature: props.temperature,
      hour: props.hour,
    }
  }

  render() {
    const {image, temperature, hour} = this.state;

    return (
      <div className = "hourly-card">
        <p className = "hour">{hour}</p>
        <img src= {image} className = "hourly-image"/>
        <p className = "hourly-temperature"> {temperature} </p>
      </div>
    )
  }
}
