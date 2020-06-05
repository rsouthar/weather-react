import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import { getTemp, meterToMile, windDegree } from './helper';

class WeatherDetails extends React.Component {

  renderWeatherDetails(data) {
    console.log(data);

    const { id } = data.current.weather[0];
    let { temp, feels_like, humidity, visibility, dew_point, pressure, wind_deg } = data.current;

    return (
      <div key={id} className="weather-details">
          <span>Feels Like: {getTemp(feels_like)}</span>
          <span>Humidity: {humidity}% </span>
          <span>Visibility: {meterToMile(visibility)} mi </span>
          <span>Dew Point: {getTemp(dew_point)}</span>
          <span>Pressure: {pressure} nPa </span>
          <span>Wind: {windDegree(wind_deg)}</span>
      </div>
    );
  }

  render() {
    return (
      <section className="weather-detail">
        {this.props.weather.map(this.renderWeatherDetails)}
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
)(WeatherDetails);
