import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  getPlace() {
    const { search } = this.state;
    document.getElementById('search')
    console.log(search)
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
      <button onClick={ (this.getPlace(), this.props.onClick) }>Search</button>
      </div>
    )
  }
}
