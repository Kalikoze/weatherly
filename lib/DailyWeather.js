import React from 'react';

export default class DailyWeather extends React.Component {
  constructor(props) {
    super()
    this.state = {
      image: props.image,
      day: props.day,
      high: props.high,
      low: props.low,
    }
  }

  render() {
    const {image, day, high, low} = this.state
    return (
     <div className='day'>
        <p className='day-name'>{day}</p>
        <img src={image} className='day-image'/>
        <p className='day-high'>{high}</p>
        <p className='day-low'>{low}</p>
      </div>
    )
  }
}
