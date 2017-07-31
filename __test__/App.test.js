import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/Components/App'
import { MockWeatherData } from '../lib/utils/MockWeatherData'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  afterEach(() => {
  localStorage.clear()
})

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render Welcome component if no weatherData', () => {
    expect(wrapper.state().weatherData).toEqual(null);

    expect(wrapper.find('Welcome').length).toEqual(1)
  })

  it.skip('should render Welcome, CurrentWeather, SevenHours, and TenDays components if there is weatherData', () => {
    wrapper.state().weatherData = {MockWeatherData}

    // wrapper.setState({
    //   weatherData: {MockWeatherData}
    // })

    expect(wrapper.state().weatherData).toEqual({MockWeatherData});

    expect(wrapper.find('Welcome').length).toEqual(1)
    // expect(wrapper.find('CurrentWeather').length).toEqual(1)
    // expect(wrapper.find('SevenHours').length).toEqual(1)
    // expect(wrapper.find('TenDays').length).toEqual(1)
  })


})
