import React from 'react';
import Search from './Search'

export const Welcome = (props) => {
    return (
      <div className={props.div}>
        <h1>Welcome!</h1>
        <Search class={props.class} searchDiv={props.searchDiv} onClick={ props.onClick} />
      </div>
  )
}
