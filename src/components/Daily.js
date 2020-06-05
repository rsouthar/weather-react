import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

import Icon from './icon';
import { getTemp, getTime, toTitleCase } from './helper';
import moment from 'moment';

class Daily extends React.Component {

  renderForcast(data) {

    return data.daily.map((k,i) => {
      return (
        <div key={i} className="sevenDay-inner">
          <p>{moment().add(i, 'days').format('ddd Do')}</p>
          <i className={`wi wi-owm-${k.weather[0].id}`}></i>
          <p>{toTitleCase(k.weather[0].description)}</p>
          <div className="daily-temp">
            <p>{getTemp(k.temp.max)}</p>
            <p>{getTemp(k.temp.min)}</p>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <section className="sevenDay frosted">
        {this.props.weather.map(this.renderForcast)}
      </section>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return {
    weather
  };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(Daily);
