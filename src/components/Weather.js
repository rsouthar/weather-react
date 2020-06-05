import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import Icon from './icon';

import { getTemp, getTime } from './helper';

class Weather extends React.Component {

  renderWeather(data) {
    console.log(data);

    const { id, main } = data.current.weather[0];
    let { temp } = data.current;

    return (
      <div key={id} className="main-temp">
        <div className="main-description">
          <h1>{getTemp(temp)}</h1>
          <h1>{main}</h1>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section className="weatherContainer">
        <Icon />
        {this.props.weather.map(this.renderWeather)}
      </section>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(Weather);
