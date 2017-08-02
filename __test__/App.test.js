import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/Components/App';
import { MockWeatherData } from '../lib/utils/MockWeatherData';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render Welcome component if no weatherData', () => {
    expect(wrapper.state().weatherData).toEqual(null);

    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('should render a Welcome component with 6 props', () => {
    wrapper.state().weatherData = null;

    expect(wrapper.instance().state.weatherData).toEqual(null);
    let rendered = wrapper.instance().render();
    expect(Object.keys(rendered.props.children.props).length).toEqual(6);
  });

  it('should render a Welcome component with a prop of header with a value of "Welcome!"', () => {
    wrapper.state().weatherData = null;

    expect(wrapper.instance().state.weatherData).toEqual(null);
    let rendered = wrapper.instance().render();
    expect(rendered.props.children.props.header).toEqual('Welcome!');
  });

  it('should render a Welcome component with a prop of searchDiv with a value of "welcome-search-div"', () => {
    wrapper.state().weatherData = null;

    expect(wrapper.instance().state.weatherData).toEqual(null);
    let rendered = wrapper.instance().render();
    expect(rendered.props.children.props.searchDiv).toEqual('welcome-search-div');
  });

  it('should render a Welcome component with a prop of class with a value of "welcome-search"', () => {
    wrapper.state().weatherData = null;

    expect(wrapper.instance().state.weatherData).toEqual(null);
    let rendered = wrapper.instance().render();
    expect(rendered.props.children.props.class).toEqual('welcome-search');
  });

  it('should render a Welcome component with a prop of onClick with a function as a value', () => {
    wrapper.state().weatherData = null;

    expect(wrapper.instance().state.weatherData).toEqual(null);
    let rendered = wrapper.instance().render();
    expect(rendered.props.children.props.onClick).toBeInstanceOf(Function);
  });

  it('should render a Welcome component with a prop of message with a value of "Enter a city to check the forecast"', () => {
    wrapper.state().weatherData = null;

    expect(wrapper.instance().state.weatherData).toEqual(null);
    let rendered = wrapper.instance().render();
    expect(rendered.props.children.props.message).toEqual(
      'Enter a city or ZIP code to check the forecast'
    );
  });

  it('should render a Welcome component with a prop of div with a value of "welcome-div"', () => {
    wrapper.state().weatherData = null;

    expect(wrapper.instance().state.weatherData).toEqual(null);
    let rendered = wrapper.instance().render();
    expect(rendered.props.children.props.div).toEqual('welcome-div');
  });

  it('should render 4 components when weatherData exists', () => {
    wrapper.state().weatherData = { MockWeatherData };

    expect(wrapper.instance().state.weatherData).toEqual({ MockWeatherData });
    let rendered = wrapper.instance().render();
    expect(rendered.props.children.length).toEqual(4);
  });

  it('should render a Welcome component when weatherData exists', () => {
    wrapper.state().weatherData = { MockWeatherData };

    expect(wrapper.instance().state.weatherData).toEqual({ MockWeatherData });
    let rendered = wrapper.instance().render();
    expect(rendered.props.children[0].type).toBeInstanceOf(Function);
  });

  it('should render a CurrentWeather component when weatherData exists', () => {
    wrapper.state().weatherData = { MockWeatherData };

    expect(wrapper.instance().state.weatherData).toEqual({ MockWeatherData });
    let rendered = wrapper.instance().render();
    expect(rendered.props.children[1].type).toBeInstanceOf(Function);
  });

  it('should render a SevenHours component when weatherData exists', () => {
    wrapper.state().weatherData = { MockWeatherData };

    expect(wrapper.instance().state.weatherData).toEqual({ MockWeatherData });
    let rendered = wrapper.instance().render();
    expect(rendered.props.children[2].type).toBeInstanceOf(Function);
  });

  it('should render a TenDays component when weatherData exists', () => {
    wrapper.state().weatherData = { MockWeatherData };

    expect(wrapper.instance().state.weatherData).toEqual({ MockWeatherData });
    let rendered = wrapper.instance().render();
    expect(rendered.props.children[3].type).toBeInstanceOf(Function);
  });

  it('should render a Welcome component with the prop header with a value of "" when weatherData exists', () => {
    wrapper.state().weatherData = { MockWeatherData };

    expect(wrapper.instance().state.weatherData).toEqual({ MockWeatherData });
    let rendered = wrapper.instance().render();
    expect(rendered.props.children[0].props.header).toEqual('');
  });

  it('should render a Welcome component with the prop searchDiv with a value of "main-page-search" when weatherData exists', () => {
    wrapper.state().weatherData = { MockWeatherData };

    expect(wrapper.instance().state.weatherData).toEqual({ MockWeatherData });
    let rendered = wrapper.instance().render();
    expect(rendered.props.children[0].props.searchDiv).toEqual('main-page-search');
  });

  it('should render a Welcome component with the prop class with a value of "search-general" when weatherData exists', () => {
    wrapper.state().weatherData = { MockWeatherData };

    expect(wrapper.instance().state.weatherData).toEqual({ MockWeatherData });
    let rendered = wrapper.instance().render();
    expect(rendered.props.children[0].props.class).toEqual('search-general');
  });

  it('should render a Welcome component with the prop onClick that is a function when weatherData exists', () => {
    wrapper.state().weatherData = { MockWeatherData };

    expect(wrapper.instance().state.weatherData).toEqual({ MockWeatherData });
    let rendered = wrapper.instance().render();
    expect(rendered.props.children[0].props.onClick).toBeInstanceOf(Function);
  });

  it('should render a Welcome component with the prop of message with a value of "Enter a city to check the forecast" when weatherData exists', () => {
    wrapper.state().weatherData = { MockWeatherData };

    expect(wrapper.instance().state.weatherData).toEqual({ MockWeatherData });
    let rendered = wrapper.instance().render();
    expect(rendered.props.children[0].props.message).toEqual(
      'Enter a city or ZIP code to check the forecast'
    );
  });

  it('should store a place into localStorage', () => {
    const city = 'co/denver';

    expect(localStorage.store).toEqual({});

    localStorage.setItem('city', city);

    expect(localStorage.store).toEqual({ city: 'co/denver' });
  });

  it('storeCity should store a place into localStorage', () => {
    const city = 'co/denver';

    expect(localStorage.store).toEqual({});

    wrapper.instance().storeCity(city);

    expect(localStorage.store).toEqual({ city: 'co/denver' });
  });

  it('should retrieve city from localStorage and set it to App state', () => {
    const city = 'co/denver';

    expect(localStorage.store).toEqual({});

    wrapper.instance().storeCity(city);

    expect(localStorage.store).toEqual({ city: 'co/denver' });

    wrapper.instance().setState({
      place: localStorage.getItem('city'),
    });

    expect(wrapper.instance().state.place).toEqual('co/denver');
  });
});
