import {
  FETCH_WEATHER
} from '../actions/type';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data , ...state ];
    default:
      return state;
  }
};
