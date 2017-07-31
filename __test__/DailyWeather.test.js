import React from 'react';
import { shallow, mount } from 'enzyme';
import { DailyWeather } from '../lib/Components/DailyWeather'

describe('DailyWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = <DailyWeather />
  })

  it('should exist', () => {
    console.log(shallow(<DailyWeather />))
    expect(wrapper).toBeDefined()
  })
})
