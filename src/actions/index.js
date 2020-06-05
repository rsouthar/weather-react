import openweathermap from '../apis/openWeather';
import {
  FETCH_WEATHER,
  GET_GEOLOCATION,
  GEOLOCATION_DENIED
} from './type';

const API_KEY = '9e41248a89f22ccb8cbe479cb75311e6';

export const fetchWeather = (lat, lon) => async dispatch => {
    const response = await openweathermap.get(`onecall`, {
      params: {
        APPID: API_KEY,
        lat: lat,
        lon: lon
      }
    });

    dispatch({ type: FETCH_WEATHER, payload: response });
};

export const getGeolocation = state => async (dispatch, getState) => {
  //console.log(getState(0));
  dispatch({ type: GET_GEOLOCATION, payload: state });

};
