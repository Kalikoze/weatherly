import React from 'react';
import { Welcome } from './Welcome';
import Search from './Search'
import CurrentWeather from './CurrentWeather'

export default class App extends React.Component {

  render() {
    const city = {
      place: 'Denver',
      date: Date.now(),
      currentTemp: 92,
      dailyLow: 64,
      dailyHigh: 98,
      description: 'Hot',
    }

    return (
      <div>
        <Welcome />
        <Search />
        <CurrentWeather
        location={city.place}
        date={city.date}
        currentTemp={city.currentTemp}
        dailyLow = {city.dailyLow}
        dailyHigh = {city.dailyHigh}
        description = {city.description}
        />
      </div>
    )
  }
}
