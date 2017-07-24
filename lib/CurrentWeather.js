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
      description: props.description
    }
  }

  render() {
    const { city, date, currentTemp, dailyLow, dailyHigh, description } = this.state
    return (
      <div className = "currentWeather">
        <h2> {city} </h2>
        <h2> {date} </h2>
        <h2> {currentTemp} </h2>
        <h2> Low: {dailyLow} </h2>
        <h2> High: {dailyHigh} </h2>
        <h2> {description} </h2>
      </div>
    )
  }
}
