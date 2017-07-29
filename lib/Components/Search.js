import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  getLocation(place) {
    let newPlace = place.split(', ');

    [newPlace[0], newPlace[1]] = [newPlace[1], newPlace[0]];
    newPlace = newPlace.join('/')
    newPlace = newPlace.replace(' ', '_')

    return () => this.props.onClick(newPlace)
  }


  render() {
    const {search} = this.state;

    return (
      <div>
      <input
        id="search"
        className = {this.props.className}
        value = {search}
        onChange={ (e) => this.setState({ search: e.target.value }) }
        placeholder="Search City..."/>
      <button onClick={ (this.getLocation(search)) }>Search</button>
      </div>
    )
  }
}
