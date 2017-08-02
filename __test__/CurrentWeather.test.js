import React from 'react';
import { shallow, mount } from 'enzyme';
import { CurrentWeather } from '../lib/Components/CurrentWeather';
import { MockWeatherData } from '../lib/utils/MockWeatherData';

describe('DailyWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather weatherData={MockWeatherData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a div element with a class of currentWeather', () => {
    expect(wrapper.find('div.currentWeather').length).toEqual(1);
  });

  it('should render a div element with a class of city-and-date', () => {
    expect(wrapper.find('div.city-and-date').length).toEqual(1);
  });

  it('should render a div element with a class of low-high', () => {
    expect(wrapper.find('div.low-high').length).toEqual(1);
  });

  it('should render one h1 elements with a class of current-city', () => {
    expect(wrapper.find('h1.current-city').length).toEqual(1);
  });

  it('should render one h2 elements', () => {
    expect(wrapper.find('h2.current-temp').length).toEqual(1);
  });

  it('should render one h3 elements with a class of current-date', () => {
    expect(wrapper.find('h3.current-date').length).toEqual(1);
  });

  it('should render two h4 elements', () => {
    expect(wrapper.find('h4').length).toEqual(2);
  });

  it('should render a h4 element with a class of daily-low', () => {
    expect(wrapper.find('h4.daily-low').length).toEqual(1);
  });

  it('should render a h4 element with a class of daily-high', () => {
    expect(wrapper.find('h4.daily-high').length).toEqual(1);
  });

  it('should render a p element with a class of description', () => {
    expect(wrapper.find('p.description').length).toEqual(1);
  });

  it('should have a property of icon', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherData.current_observation.icon');
  });

  it('should have a property of city', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherData.location.city');
  });

  it('should have a property of state', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherData.location.state');
  });

  it('should have have array of 10 at forecastday', () => {
    expect(wrapper.instance()).toHaveProperty(
      'props.weatherData.forecast.simpleforecast.forecastday.length',
      10
    );
  });

  it('should have a property of date', () => {
    const date = MockWeatherData.forecast.simpleforecast.forecastday[0];

    expect(date).toHaveProperty('date.pretty');
  });

  it('should have a property of temp_f', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherData.current_observation.temp_f');
  });

  it('should have a property of low.fahrenheit', () => {
    const dailyLow = MockWeatherData.forecast.simpleforecast.forecastday[0];

    expect(dailyLow).toHaveProperty('low.fahrenheit');
  });

  it('should have a property of high.fahrenheit', () => {
    const dailyHigh = MockWeatherData.forecast.simpleforecast.forecastday[0];

    expect(dailyHigh).toHaveProperty('high.fahrenheit');
  });

  it('should have a property of fcttext', () => {
    const description = MockWeatherData.forecast.txt_forecast.forecastday[0];

    expect(description).toHaveProperty('fcttext');
  });
});
