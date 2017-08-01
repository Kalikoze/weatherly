import React from 'react';
import { shallow, mount } from 'enzyme';
import { DailyWeather } from '../lib/Components/DailyWeather'
import { MockWeatherData } from '../lib/utils/MockWeatherData'

describe('DailyWeather', () => {
  let wrapper;

  const wImage = MockWeatherData.forecast.simpleforecast.forecastday[0].icon

  const Data = {
    icon: `../lib/Assets/weather-condition-icons/${wImage}.svg`,
    date: {
      weekday: MockWeatherData.forecast.simpleforecast.forecastday[0].date.weekday
    },
    high: {
      fahrenheit: MockWeatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit
    },
    low: {
      fahrenheit: MockWeatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit
    }
  }

  beforeEach(() => {
    wrapper = shallow(<DailyWeather weatherdata={Data} />)

  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a div element with a class of day', () => {
    expect(wrapper.find('div.day').length).toEqual(1)
  })

  it('should render three p elements', () => {
    expect(wrapper.find('p').length).toEqual(3)
  })

  it('should render one p element with a class name of day-name', () => {
        expect(wrapper.find('p.day-name').length).toEqual(1)
  })

  it('should render one p element with a class name of day-low', () => {
        expect(wrapper.find('p.day-low').length).toEqual(1)
  })

  it('should render one p element with a class name of day-high', () => {
        expect(wrapper.find('p.day-high').length).toEqual(1)
  })

   it('should render one img element with a class name of day-image', () => {
    expect(wrapper.find('img.day-image').length).toEqual(1)
  })

  it('should have a property of icon', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherdata.icon')
  })

  it('should have a property of high', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherdata.high.fahrenheit')
  })

  it('should have a property of low', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherdata.low.fahrenheit')
  })

  it('should have a property of weekday ', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherdata.date.weekday')
  })
})
