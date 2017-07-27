import React from 'react';
import { Welcome } from './Welcome';
import Search from './Search';
import { CurrentWeather } from './CurrentWeather';
import { SevenHours } from './SevenHours';
import { TenDays } from './TenDays';
import Key from '../Assets/Key.js'
import '../../styles.css'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      weatherData: null,
      city: null,
      state: null,
    }
  }

  //geolocation web api mdn
  //get user coordinates
  //check for user coordinates/if they allow geolocation, then get local weather with this api call 

  getCityWeatherData(state, city) {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/forecast/forecast10day/geolookup/hourly/q/${state}/${city}.json`)
    .then( response => {
      response.json().then( data => {
        return this.setState({
          weatherData: data,
          city: city,
          state: state,
        })
      })
    })
  }

  render() {
    const { weatherData } = this.state
    console.log(this.state);

    if (!weatherData) {
      return (<div> <h1 className='welcome-message'>Welcome to Weathrly!<Search onClick={ this.getCityWeatherData.bind(this) } /></h1> </div>)
    } else {
      return (<div>
        <Welcome />
        <CurrentWeather weatherData={weatherData} />
        <Search onClick={ this.getCityWeatherData.bind(this) }/>
        <SevenHours weatherData={weatherData} />
        <TenDays weatherData={weatherData}/>
      </div>)
    }
  }
}
