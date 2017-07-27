import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  getLocation(place) {
    let splitPlace = place.split(' ')

    if (splitPlace.length === 2) {

      let state = splitPlace[1];
      let city = splitPlace[0].split('').splice(0, (splitPlace[0].length - 1)).join('')
      return () => this.props.onClick(state, city);
      // console.log('city', city)
      // console.log('state', state)

    }
    let state = splitPlace[2];
    let city = splitPlace[0] + ' ' + splitPlace[1];
    city = city.replace(' ', '_').substr(0, city.length - 1)


    return () => this.props.onClick(city, state)
  }

  render() {
    const {search} = this.state;

    return (
      <div className="search-bar">
      <input
        id="search"
        value = {search}
        onChange={ (e) => this.setState({ search: e.target.value }) }
        placeholder="Search City..."/>
      <button onClick={ (this.getLocation(search)) }>Search</button>
      </div>
    )
  }
}
