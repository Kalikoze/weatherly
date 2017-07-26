import React from 'react';
import Key from './Key';

export const Search = (props) => {


    return (
      <div className="search-bar">
      <input type="search" placeholder="Search City..."/>
      <button onClick={ props.onClick }>Search</button>
      </div>
    )
}
