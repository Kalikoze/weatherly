import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Components/Search'
import Trie from '../lib/utils/Trie';
import Cities from '../lib/utils/cities'
import { MockWeatherData } from '../lib/utils/MockWeatherData'

describe('Search', () => {
  let wrapper

  let newTrie = new Trie()
  newTrie.populate(Cities.data)

  beforeEach(() => {
    wrapper = shallow(<Search />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render a div element', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should render an input element', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

  it('should render a ul element', () => {
    expect(wrapper.find('ul').length).toEqual(1)
  })

  it('should render a button element', () => {
    expect(wrapper.find('button').length).toEqual(1)
  })

  it('should have input element with 5 props', () => {
    let rendered = ((wrapper.instance()).render());

    expect(Object.keys(rendered.props.children[0].props).length).toEqual(5)
  })

  it('should have input element with className prop', () => {
    let rendered = ((wrapper.instance()).render());

    expect(rendered.props.children[0].props).toHaveProperty('className')
  })

  it('should have input element with value prop', () => {
    let rendered = ((wrapper.instance()).render());

    expect(rendered.props.children[0].props.value).toEqual('')
  })

  it('should have input element with property onKeyUp that is a function', () => {
    let rendered = ((wrapper.instance()).render());

    expect(rendered.props.children[0].props.onKeyUp).toBeInstanceOf(Function)
  })

  it('should have input element with property onChange that is a function', () => {
    let rendered = ((wrapper.instance()).render());

    expect(rendered.props.children[0].props.onChange).toBeInstanceOf(Function)
  })

  it('should have input element with placeholder prop with a value of "City, ST"', () => {
    let rendered = ((wrapper.instance()).render());

    expect(rendered.props.children[0].props.placeholder).toEqual('City, ST / ZIP Code')
  })

  it('should have a ul element with a prop of className with a value of "suggestions-list"', () => {
    let rendered = ((wrapper.instance()).render());

    expect(rendered.props.children[1].props.className).toEqual('suggestions-list')
  })

  it('should have button element with property onClick that is a function', () => {
    let rendered = ((wrapper.instance()).render());

    expect(rendered.props.children[2].props.onClick).toBeInstanceOf(Function)
  })

  it.skip('should call a function when button is clicked', () => {
    const mockFn = jest.fn();

    wrapper = shallow(<Search onClick={mockFn}/>)

    const searchButton = wrapper.find('button')

    searchButton.simulate('click')

    expect(mockFn).toHaveBeenCalledTimes(1)

    searchButton.simulate('click')

    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it.skip('should call a function on keyUp', () => {
    const mockFn = jest.fn();

    wrapper = shallow(<Search onKeyUp={mockFn}/>)

    const Input = wrapper.find('input')

    Input.simulate('keyUp', {key: 'd', keyCode: 68, which: 68})

    expect(mockFn).toHaveBeenCalledTimes(1)

    Input.simulate('keyUp', {key: 'e', keyCode: 69, which: 69})

    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it.skip('should accept string as an argument and return a function', () => {
    wrapper.instance().setState({
      search: 'Denver, CO'
    })

    expect(wrapper.state().search).toEqual('Denver, CO')

    wrapper.instance().getLocation('Denver, CO')

    console.log(wrapper.instance().getLocation('Denver, CO'))

    expect(wrapper.state().search).toEqual('')
  })
})
