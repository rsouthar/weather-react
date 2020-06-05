import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  // headers: {
  //   Authorization: 'APPID 6a1ba2137220501ae8a24f8fdb05b04c'
  // }
})
