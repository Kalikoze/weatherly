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
      place: null
    }
  }

  //geolocation web api mdn
  //get user coordinates
  //check for user coordinates/if they allow geolocation, then get local weather with this api call

  getCityWeatherData(newPlace) {
    fetch(`http://api.wunderground.com/api/${Key}/conditions/forecast/forecast10day/geolookup/hourly/q/${newPlace}.json`)
    .then( response => {
      response.json().then( data => {
        return this.setState({
          weatherData: data,
          place: newPlace
        })
      })
    })
    this.storeCity(newPlace);
  }

  componentWillMount() {
    const city = localStorage.getItem('city')
    if (city) {
      this.getCityWeatherData(city)
    }
  }

  storeCity(place) {
    localStorage.setItem('city', place)
  }

  render() {
    const { weatherData } = this.state

    if (!weatherData) {
      return (<div>
        <h1 className='welcome-message'>Welcome to Weathrly!
        <Search onClick={ this.getCityWeatherData.bind(this) } />
        </h1>
      </div>)
    } else {

      document.body.style.backgroundImage = 'none';
      const weatherImage = weatherData.current_observation.icon;
      const background = document.getElementById('app')
      background.style.backgroundImage = `url(./lib/Assets/weather-condition-backgrounds/${weatherImage}.jpg)`;


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
