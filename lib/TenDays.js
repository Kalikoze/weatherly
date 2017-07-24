import React from 'react';
import DailyWeather from './DailyWeather';

export default class TenDays extends React.Component {
    render() {
        const tenDays = {
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Weather-more-clouds.svg',
            day: 'Monday',
            high: '100°',
            low: '25°',
        }
        const {image, day, high, low} = tenDays
        return (
            <div className='ten-days'>
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
            </div>
        )
    }
}