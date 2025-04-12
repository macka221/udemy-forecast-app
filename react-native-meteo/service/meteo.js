import axios from 'axios';
import { apiRootUri } from '../common/constants/forecast-api.constants';

export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    const endpoint = `forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true&temperature_unit=fahrenheit`;
    const { data } = await axios.get(`${apiRootUri}${endpoint}`);
    return data;
  }

  static async fetchCityByCoords(coords) {
    const endpoint = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}&accept-language=en`;
    const { data: { address: { city, village, town } } } = await axios.get(endpoint);
    return city || village || town;
  }

  static async fetchCoordsByCity(city) {
    try {
      const endpoint = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
      const { latitude: lat, longitude: lng } = (await axios.get(endpoint)).data.results[0];
      const response = { lat: lat.toString(), lng: lng.toString() };
      return response;
    } catch (error) {
      throw 'Invalid City name';
    }
  }
}
