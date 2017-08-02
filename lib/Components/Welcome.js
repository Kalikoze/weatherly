import React from 'react';
import Search from './Search';

export const Welcome = props => {
  return (
    <div className={props.div}>
      <h1>
        {props.header}
      </h1>
      <p className="message">
        {props.message}
      </p>
      <Search
        class={props.class}
        cities={props.places}
        searchDiv={props.searchDiv}
        onClick={props.onClick}
      />
    </div>
  );
};
