import {
  GET_GEOLOCATION,
  GEOLOCATION_DENIED
} from '../actions/type';

const INTIAL_STATE = {
  geo: {
    latitude: 0,
    longitude: 0
  }
}

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case GET_GEOLOCATION:
      return { ...state, geo: action.payload};
    case GEOLOCATION_DENIED:
      return { [action.payload]: action.payload, ...state };
    default:
      return state;
  }
}
