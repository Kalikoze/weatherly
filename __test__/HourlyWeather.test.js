import React from 'react';
import { shallow, mount } from 'enzyme';
import { HourlyWeather } from '../lib/Components/HourlyWeather'
import { MockWeatherData } from '../lib/utils/MockWeatherData'

describe('HourlyWeather', () => {
  let wrapper;

  const wImage = MockWeatherData.hourly_forecast[0].icon
  const Data = {

        image: `../lib/Assets/weather-condition-icons/${wImage}.svg`,
        temp: {
            english: MockWeatherData.hourly_forecast[0].temp.english
        },
        FCTTIME: {
            civil: MockWeatherData.hourly_forecast[0].FCTTIME.civil
        },
  }

  beforeEach(() => {
    wrapper = shallow(<HourlyWeather weatherData={Data} />)

  })

  it('should exist', () => {
    expect(true)
    expect(wrapper).toBeDefined();
  })

  it('should render a div element with a class of hourly-card', () => {
      expect(wrapper.find('div.hourly-card').length).toEqual(1)
  })

  it('should render two p elements', () => {
      expect(wrapper.find('p').length).toEqual(2)
  })

  it('should render one p element with a class of hour', () => {
      expect(wrapper.find('p.hour').length).toEqual(1)
  })

  it('should render one p element with a class of hourly-temperature', () => {
      expect(wrapper.find('p.hourly-temperature').length).toEqual(1)
  })

  it('should render one image with a class of hourly-image', () => {
      expect(wrapper.find('img.hourly-image').length).toEqual(1)
  })

  it('should have properties of image, temperature, and hour', () => {
      expect(wrapper.instance()).toHaveProperty('props.weatherData.image')
      expect(wrapper.instance()).toHaveProperty('props.weatherData.FCTTIME')
      expect(wrapper.instance()).toHaveProperty('props.weatherData.temp')
  })

})