import React from 'react';
import { shallow, mount } from 'enzyme';
import { Welcome } from '../lib/Components/Welcome'

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />)
  })

  it('should exist', () => {
    console.log(wrapper)
    expect(wrapper).toBeDefined()
  })

  it('should render the Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1)
  })

  it('should render the h1 and p tags', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
  })
})
