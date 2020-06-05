import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather, getGeolocation } from '../actions';
import Weather from './Weather';
import Background from './Background';
import WeatherDetails from './WeatherDetail';
import Daily from './Daily';

class App extends React.Component {
  state = { lat: null, lon: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude, lon: position.coords.longitude }),
      err => this.setState({ errorMessage: err.message }),
    );
  }

  renderContent() {

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      this.props.fetchWeather(this.state.lat, this.state.lon);
      return <Weather />;
    }
  }

  render() {
    return(
      <div className="main-body">
        <Background />
        {this.renderContent()}
        <WeatherDetails />
        <Daily />
      </div>
    );
  }
};

export default connect(
  null,
  { fetchWeather, getGeolocation  }
)(App);
