import React from 'react';
import { Welcome } from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHours from './SevenHours';
import TenDays from './TenDays';
import FetchTest from './FetchTest';
import MockData from './mockData'
import Key from './Key.js'


export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      place: MockData.current_observation.display_location.full,
      date: MockData.forecast.simpleforecast.forecastday[0].date.pretty,
      currentTemp: MockData.current_observation.temp_f,
      dailyLow: MockData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      dailyHigh: MockData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      description: MockData.forecast.txt_forecast.forecastday[0].fcttext,
    }
  }

  componentDidMount() {
    fetch('http://api.wunderground.com/api/' + Key + '/conditions/q/Colorado/Denver.json').then(function(response) {
      response.json().then(function(data) {
        return data.current_observation.temp_f
      });
    })
  }

  // temperature() {
  //   this.setState({
  //     currentTemp: this.componentWillMount(),
  //   });
  // }


  render() {

    console.log(MockData)

    const {place, date, currentTemp, dailyLow, dailyHigh, description} = this.state;

    return (
      <div>
        <Welcome />
        <Search />
        <CurrentWeather
        location={place}
        date={date}
        currentTemp={currentTemp}
        dailyLow = {dailyLow}
        dailyHigh = {dailyHigh}
        description = {description}
        />
        <SevenHours />
        <TenDays />
        <FetchTest />
      </div>
    )
  }
}
