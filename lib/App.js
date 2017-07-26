import React from 'react';
import { Welcome } from './Welcome';
import { Search } from './Search';
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
      weatherData: null,
      // place: MockData.current_observation.display_location.full,
      // date: MockData.forecast.simpleforecast.forecastday[0].date.pretty,
      // currentTemp: MockData.current_observation.temp_f,
      // dailyLow: MockData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      // dailyHigh: MockData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      // description: MockData.forecast.txt_forecast.forecastday[0].fcttext,
      // image: MockData.current_observation.icon_url
    }
  }

  getCityWeatherData() {
    
  } 


// maybe this api call gets made in a different component
// write a function called getWeatherForCity or whatever that takes a city or state or something in this component
// bind it and pass it down to the search bar thing

  componentWillMount() {
    let self = this 
   
    fetch('http://api.wunderground.com/api/' + Key + '/conditions/forecast/forecast10day/geolookup/hourly/q/NC/Raleigh.json')
    .then(function(response) {
      response.json().then(function(data) {
        return self.setState({
          weatherData: data
        })
      });
    })
  }

  render() {
    console.log(this.state);
    const { weatherData } = this.state
    // console.log('weatherData', this.state.weatherData)

    // const {place, date, currentTemp, dailyLow, dailyHigh, description, image} = this.state;
    // so because that api call is asynchronous, there's going to be a moment or two where we have to wait for the info to come back
    // we can have condditional rendering (if no weather data, then show input welcome thing)
    return (
      <div>
        { !weatherData ?  <h1 className='welcome-message'>Welcome to Weathrly!<Search onClick={ this.getCityWeatherData.bind(this) } /></h1> : null }
        <Welcome />
        {/*<CurrentWeather location={this.state.weatherData.location.city} />*/}
        <Search />
        <SevenHours />
        <TenDays />
        <FetchTest /> 
      </div>
    )
  }
}

//just for right now
{/*<CurrentWeather
        location={place}
        date={date}
        currentTemp={currentTemp}
        dailyLow = {dailyLow}
        dailyHigh = {dailyHigh}
        description = {description}
        image = {image}
        />*/}