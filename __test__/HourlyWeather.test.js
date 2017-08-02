import React from 'react';
import { shallow, mount } from 'enzyme';
import { HourlyWeather } from '../lib/Components/HourlyWeather';
import { MockWeatherData } from '../lib/utils/MockWeatherData';

describe('HourlyWeather', () => {
  let wrapper;

  const wImage = MockWeatherData.hourly_forecast[0].icon;
  const Data = {
    image: `../lib/Assets/weather-condition-icons/${wImage}.svg`,
    temp: {
      english: MockWeatherData.hourly_forecast[0].temp.english,
    },
    FCTTIME: {
      civil: MockWeatherData.hourly_forecast[0].FCTTIME.civil,
    },
  };

  beforeEach(() => {
    wrapper = shallow(<HourlyWeather weatherData={Data} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a div element with a class of hourly-card', () => {
    expect(wrapper.find('div.hourly-card').length).toEqual(1);
  });

  it('should render two p elements', () => {
    expect(wrapper.find('p').length).toEqual(2);
  });

  it('should render one p element with a class of hour', () => {
    expect(wrapper.find('p.hour').length).toEqual(1);
  });

  it('should render one p element with a class of hourly-temperature', () => {
    expect(wrapper.find('p.hourly-temperature').length).toEqual(1);
  });

  it('should render one image with a class of hourly-image', () => {
    expect(wrapper.find('img.hourly-image').length).toEqual(1);
  });

  it('should have properties of image', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherData.image');
  });

  it('should have properties of hour', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherData.FCTTIME');
  });

  it('should have properties of temperature', () => {
    expect(wrapper.instance()).toHaveProperty('props.weatherData.temp');
  });

  it('should render the correct hour of the day', () => {
    const hour = MockWeatherData.hourly_forecast[0].FCTTIME.civil

    expect(wrapper.find('p.hour').text()).toEqual(hour);
  });

  it('should render the correct hourly temperature for each hour', () => {
    const hourlyTemp = MockWeatherData.hourly_forecast[0].temp.english + '°';

    expect(wrapper.find('p.hourly-temperature').text()).toEqual(hourlyTemp);
  });
});
