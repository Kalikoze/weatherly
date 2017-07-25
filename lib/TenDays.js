import React from 'react';
import DailyWeather from './DailyWeather';
import MockData from './mockData';

export default class TenDays extends React.Component {
    render() {
        const dailyForecast = {
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Weather-more-clouds.svg',
            day: 'Monday',
            high: '100°',
            low: '25°',
        }
        const {image, day, high, low} = dailyForecast
        return (
            <div className='daily-forecast'>
            {
                MockData.forecast.simpleforecast.forecastday.map( (day, i) => 
                    <DailyWeather index={i} key={i} image={image} day={day} high={high} low={low} />
                )

            }


                {/*<DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />
                <DailyWeather image={image} day={day} high={high} low={low} />*/}
            </div>
        )
    }
}
