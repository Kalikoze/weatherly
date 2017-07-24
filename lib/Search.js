import React from 'react';

export default class Search extends React.Component {

  render() {
    return (
      <div className="search">
      <input type="search" placeholder="Search City..."/>
      <button>Search</button>
      </div>
    )
  }
}
