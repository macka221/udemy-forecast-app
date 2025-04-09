import axios from 'axios';
import { apiRootUri } from '../common/constants/forecast-api.constants';

export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    const endpoint = `latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`;
    const { data } = await axios.get(`${apiRootUri}?${endpoint}`);
    return data;
  }
}
