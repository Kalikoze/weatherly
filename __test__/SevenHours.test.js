import React from 'react';
import { shallow, mount } from 'enzyme';
import { SevenHours } from '../lib/Components/SevenHours';
import { HourlyWeather } from '../lib/Components/HourlyWeather';
import { MockWeatherData } from '../lib/utils/MockWeatherData';

describe('SevenHours', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHours weatherData={MockWeatherData} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render a div element with a class of hourly-weather', () => {
    expect(wrapper.find('div.hourly-weather').length).toEqual(1);
  });

  it('should render seven DailyWeather components', () => {
    expect(wrapper.find(HourlyWeather).length).toEqual(7);
  });
});
