import React from 'react';

export const Search = (props) => {
    return (
      <div className="search-bar">
      <input type="search" placeholder="Search City..."/>
      <button onClick={ props.onClick }>Search</button>
      </div>
    )
}
