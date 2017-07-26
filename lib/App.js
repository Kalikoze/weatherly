import React from 'react';
import { Welcome } from './Welcome';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHours from './SevenHours';
import TenDays from './TenDays';
import FetchTest from './FetchTest';
import Key from './Key.js'


export default class App extends React.Component {

  componentDidMount() {
    fetch('http://api.wunderground.com/api/' + Key + '/conditions/q/Colorado/Denver.json').then(function(response) {
      response.json().then(function(data) {
        return data.current_observation.temp_f
      });
    })
  }

  render() {
    return (
      <div>
        <Welcome />
        <Search />
        <CurrentWeather />
        <SevenHours />
        <TenDays />
        <FetchTest />
      </div>
    )
  }
}
