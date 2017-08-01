import React from 'react';
import { shallow, mount } from 'enzyme';
import { TenDays } from '../lib/Components/TenDays'
import { DailyWeather } from '../lib/Components/DailyWeather'
import { MockWeatherData } from '../lib/utils/MockWeatherData'


describe('TenDays', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<TenDays weatherData={MockWeatherData}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a div element with a class of daily-forecast', () => {
    expect(wrapper.find('div.daily-forecast').length).toEqual(1)
  })

  it('should render ten DailyWeather components', () => {
    expect(wrapper.find(DailyWeather).length).toEqual(10)
  })
})
