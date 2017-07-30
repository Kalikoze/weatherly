import React from 'react';
import { Welcome } from './Welcome';
import Search from './Search';
import { CurrentWeather } from './CurrentWeather';
import { SevenHours } from './SevenHours';
import { TenDays } from './TenDays';
import Key from '../utils/Key.js'
import '../../styles.css'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      weatherData: null,
      place: null,
    }
  }

  getCityWeatherData(newPlace) {
    console.log('API', newPlace);
    fetch(`http://api.wunderground.com/api/${Key}/conditions/forecast/forecast10day/geolookup/hourly/q/${newPlace}.json`)
    .then( response => {
      response.json().then( data => {
        return this.setState({
          weatherData: data,
          place: newPlace
        })
      }).catch(function(error) {
        errorMessage = 'error stuff';
     })
    });
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
      return (
        <div className='welcome-page'>
          <Welcome header="Welcome!"
                   div='welcome-div'
                   searchDiv='welcome-search-div'
                   class="welcome-search"
                   onClick={ this.getCityWeatherData.bind(this) }
                   />
        </div>)
    } else {

      document.body.style.backgroundImage = 'none';
      const weatherImage = weatherData.current_observation.icon;
      const background = document.getElementById('app')
      background.style.backgroundImage = `url(./lib/Assets/weather-condition-backgrounds/${weatherImage}.jpg)`;


      return (
        <div>
          <Welcome header='' searchDiv='main-page-search' class='search-general' onClick={ this.getCityWeatherData.bind(this) } />
          <CurrentWeather weatherData={weatherData} />
          <SevenHours weatherData={weatherData} />
          <TenDays weatherData={weatherData}/>
        </div>)
    }
  }
}
