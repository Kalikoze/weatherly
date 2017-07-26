import React from 'react';
import { Welcome } from './Welcome';
import { Search } from './Search';
import CurrentWeather from './CurrentWeather';
import { SevenHours } from './SevenHours';
import { TenDays } from './TenDays';
import MockData from './mockData'
import Key from './Key.js'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      weatherData: null,
    }
  }

  getCityWeatherData() {

  }

  componentDidMount() {
    let self = this

    fetch('http://api.wunderground.com/api/' + Key + '/conditions/forecast/forecast10day/geolookup/hourly/q/CO/Denver.json')
    .then(function(response) {
      response.json().then(function(data) {
        return self.setState({
          weatherData: data
        })
      });
    })
  }

  render() {
    const { weatherData } = this.state

    if (!weatherData) {
      return (<div> <h1 className='welcome-message'>Welcome to Weathrly!<Search onClick={ this.getCityWeatherData.bind(this) } /></h1> </div>)
    } else {
      return (<div>
        <Welcome />
        <CurrentWeather weatherData={weatherData} />
        <Search />
        <SevenHours weatherData={weatherData} />
        <TenDays weatherData={weatherData}/>
      </div>)
    }
  }
}
