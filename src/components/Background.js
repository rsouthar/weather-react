import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

import images from './images';

class Background extends React.Component {

  renderBackground(data) {

    const { id } = data.current.weather[0];
    const img = images.map(({id, src, title, description}) => <img key={id} src={src} alt={description} />);
    switch(id) {
      case 701:
        return img[1]
      case 800:
        return img[2];
      case 801:
        return img[3];
      case 802:
        return img[4];
      case 803:
        return img[5];
      case 804:
        return img[6];
      default:
        return img[0];
    }
  }

  render() {
    return (
      <section className="hero">
      {this.props.weather.map(this.renderBackground)}
      </section>
    );
  }

}

const mapStateToProps = ({ weather }) => {
  return { weather};
};


export default connect(
  mapStateToProps,
  { fetchWeather }
)(Background);
