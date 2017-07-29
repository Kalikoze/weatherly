import React from 'react';
import Search from './Search'

export const Welcome = (props) => {
    return (
      <div>
      <h1>Welcome!</h1>
      <Search className={props.className} onClick={ props.onClick} />
      </div>
  )
}
