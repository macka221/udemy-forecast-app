import { View } from 'react-native';
import { homeStyle } from './home.style.js';
import { Txt } from '../../components/txt/txt';
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic.jsx';
import { getWeatherInterpretation } from '../../utils/meteo.utils.js';

export function Home({ weather }) {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);

  return (
    <>
      <View style={homeStyle.meteo_basic}>
        <MeteoBasic temperature={Math.round(currentWeather.temperature)} interpretation={currentInterpretation} />
      </View>
      <View style={homeStyle.searchbar_container}>
        <Txt>
          Search Bar
        </Txt>
      </View>
      <View style={homeStyle.meteo_advanced}>
        <Txt>
          Advanced Weather Info
        </Txt>
      </View>
    </>
  );
}
