import React from 'react';
import Key from './Key';

export const Search = (props) => {
  
  // componentWillMount() {
  //   let self = this 
  //   // we need to figure out a way to pass in these states and cities dynamically
  //   // api docs 
  //   fetch('http://api.wunderground.com/api/' + Key + '/conditions/forecast/forecast10day/geolookup/hourly/q/NC/Raleigh.json')
  //   // waits for the data to come back from api
  //   .then(function(response) {
  //     // response is all the stuff we got back from the api, but we can call it whatever we want
  //     response.json().then(function(data) {
  //       // data is jsonified response/weatherData from line 32
  //       return self.setState({
  //         weatherData: data
  //       })
  //       //storing all this data in state
  //     });
  //   })
  // }

    return (
      <div className="search-bar">
      <input type="search" placeholder="Search City..."/>
      <button onClick={ props.onClick }>Search</button>
      </div>
    )
}
