import React from 'react';
import { shallow, mount } from 'enzyme';
import { DailyWeather } from '../lib/Components/DailyWeather'
import { MockWeatherData } from '../lib/utils/MockWeatherData'

describe('DailyWeather', () => {
  let wrapper;

  const wImage = MockWeatherData.forecast.simpleforecast.forecastday[0].icon

  const Data = {
    icon: 'sdoifwlfkjas',
    date: {
      weekday: 'Monday'
    },
    high: {
      fahrenheit: 23
    },
    low: {
      fahrenheit: 3
    }
  }
    //  weatherImage: MockWeatherData.forecast.simpleforecast.forecastday[0].icon,
    //  image: `../lib/Assets/weather-condition-icons/${wImage}.svg`,
    //  day: MockWeatherData.forecast.simpleforecast.forecastday[0].date.weekday,
    //  high: MockWeatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    //  low: MockWeatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit,
  // }

  beforeEach(() => {
    console.log('Data ', Data)

    wrapper = shallow(<DailyWeather weatherdata={Data} />)

  })

  it('should exist', () => {
    expect(true)
    expect(wrapper).toBeDefined();
  })
})
