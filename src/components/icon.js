import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class Icon extends React.Component {

  renderIcon(data) {
    //console.log(data);
    const { id } = data.current.weather[0];
    return (
      <i key={id} className={`wi wi-owm-${id}`}></i>
    );
  }

  render() {
    return (
      <div className="icon-container">
        {this.props.weather.map(this.renderIcon)}
      </div>
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
)(Icon);
