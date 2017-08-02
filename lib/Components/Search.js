import React from 'react';
import Trie from '../utils/Trie';
import Cities from '../utils/cities';

let newTrie = new Trie();
newTrie.populate(Cities.data);

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      suggestedCities: [],
    };
  }

  populateCities(e) {
    let string = this.state.search.toLowerCase();
    if (string.length) {
      this.setState({
        suggestedCities: newTrie.suggest(string).splice(0, 10),
      });
    } else {
      this.setState({
        suggestedCities: [],
      });
    }
  }

  getLocation(place) {
    let newPlace = place.split(', ');

    [newPlace[0], newPlace[1]] = [newPlace[1], newPlace[0]];
    newPlace = newPlace.join('/');
    newPlace = newPlace.replace(' ', '_');
    return () => (this.props.onClick(newPlace), this.setState({ search: '', suggestedCities: [] }));
  }

  render() {
    const { search, suggestedCities } = this.state;

    return (
      <div className={this.props.searchDiv}>
        <input
          className={this.props.class}
          value={search}
          onKeyUp={e => this.populateCities(e)}
          onChange={e => this.setState({ search: e.target.value })}
          placeholder="City, ST / ZIP Code"
        />
        <ul className="suggestions-list">
          {suggestedCities.map((city, i) =>
            <li
              key={i}
              onClick={e => this.setState({ search: e.target.innerHTML, suggestedCities: [] })}
            >
              {city}
            </li>
          )}
        </ul>
        <button onClick={this.getLocation(search)}>Search</button>
      </div>
    );
  }
}
