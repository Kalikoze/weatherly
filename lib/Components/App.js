import React from 'react';
import { Welcome } from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import { SevenHours } from './SevenHours';
import { TenDays } from './TenDays';
import Key from '../Assets/Key.js'
import '../../styles.css'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      weatherData: null,
    }
  }

  getCityWeatherData() {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/forecast/forecast10day/geolookup/hourly/q/GA/Atlanta.json`)
    .then( response => {
      response.json().then( data => {
        return this.setState({
          weatherData: data
        })
      })
    })
  }

  render() {
    const { weatherData } = this.state
    console.log(weatherData)

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
