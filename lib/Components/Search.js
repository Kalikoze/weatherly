import React from 'react';
import Trie from '../utils/Trie';
import Cities from '../utils/cities'

let newTrie = new Trie()
newTrie.populate(Cities.data)



export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      suggestedCities: []
    }
  }

  populateCities() {
    let string = this.state.search.toLowerCase();
    this.setState({
      suggestedCities: newTrie.suggest(string)
    })
  }

  getLocation(place) {
    let newPlace = place.split(', ');

    [newPlace[0], newPlace[1]] = [newPlace[1], newPlace[0]];
    newPlace = newPlace.join('/')
    newPlace = newPlace.replace(' ', '_')
    return () => this.props.onClick(newPlace)
  }


  render() {
    const {search, suggestedCities} = this.state;

    return (
      <div className={this.props.searchDiv}>
      <input
        className = {this.props.class}
        value = {search}
        onChange={ (e) => (this.setState({ search: e.target.value }), this.populateCities()) }
        placeholder="Search City..." />
      <ul className = 'suggestions-list'>
        {suggestedCities.map( (city, i) => <li key={i} onClick = {((e) => this.getLocation( e.target.innerHTML))}>{city}</li>)}
      </ul>
      <button onClick={ (this.getLocation(search)) }>Search</button>
      </div>
    )
  }
}
