import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import geolocation from './geoReducer';

export default combineReducers({
  geo: geolocation,
  weather: weatherReducer
});
