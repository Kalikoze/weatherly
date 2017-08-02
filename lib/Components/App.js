import React from 'react';
import { Welcome } from './Welcome';
import Search from './Search';
import { CurrentWeather } from './CurrentWeather';
import { SevenHours } from './SevenHours';
import { TenDays } from './TenDays';
import Key from '../utils/Key.js';
import '../../styles.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
      place: null,
      message: 'Enter a city or ZIP code to check the forecast',
    };
  }

  getCityWeatherData(newPlace) {
    fetch(
      `http://api.wunderground.com/api/${Key}/conditions/forecast/forecast10day/geolookup/hourly/q/${newPlace}.json`
    )
      .then(response => {
        response
          .json()
          .then(data => {
            if (data.response.error) {
              localStorage.clear();
              return this.setState({ message: 'Please enter a valid city and state' });
            }
            this.storeCity(newPlace);
            return this.setState({
              weatherData: data,
              place: newPlace,
              message: '',
            });
          })
          .catch(error => {
            this.setState({ message: 'The server is down, please try again later' });
          });
      })
      .catch(error => {
        this.setState({ message: 'The server is down, please try again later' });
      });
  }

  componentWillMount() {
    const city = localStorage.getItem('city');
    if (city) {
      this.getCityWeatherData(city);
    }
  }

  storeCity(place) {
    localStorage.setItem('city', place);
  }

  render() {
    const { weatherData, place, message } = this.state;
    if (!weatherData) {
      return (
        <div className="welcome-page">
          <Welcome
            header="Welcome!"
            searchDiv="welcome-search-div"
            class="welcome-search"
            onClick={this.getCityWeatherData.bind(this)}
            message={message}
            div="welcome-div"
          />
        </div>
      );
    } else {
      // const weatherImage = weatherData.current_observation.icon;
      // const background = document.getElementById('app')
      // background.style.backgroundImage = `url(./lib/Assets/weather-condition-backgrounds/${weatherImage}.jpg)`;

      return (
        <div>
          <Welcome
            header=""
            searchDiv="main-page-search"
            class="search-general"
            onClick={this.getCityWeatherData.bind(this)}
            message={message}
          />
          <CurrentWeather weatherData={weatherData} />
          <SevenHours weatherData={weatherData} />
          <TenDays weatherData={weatherData} />
        </div>
      );
    }
  }
}
