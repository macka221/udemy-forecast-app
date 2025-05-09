import { View } from 'react-native';
import { homeStyle } from './home.style.js';
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic.jsx';
import { getWeatherInterpretation } from '../../utils/meteo.utils.js';
import { MeteoAdvanced } from '../../components/MeteoAdvanced/MeteoAdvanced.jsx';
import { SearchBar } from '../../components/SearchBar/SearchBar.jsx';

export function Home({ weather, city, onSubmitSearch }) {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);

  return (
    <>
      <View style={homeStyle.meteo_basic}>
        <MeteoBasic
          city={city}
          temperature={Math.round(currentWeather.temperature)}
          interpretation={currentInterpretation}
          weather={weather.daily}
        />
      </View>
      <View style={homeStyle.searchbar_container}>
        <SearchBar onSubmit={onSubmitSearch} />
      </View>
      <View style={homeStyle.meteo_advanced}>
        <MeteoAdvanced sunrise={weather.daily.sunrise[0].split('T')[1]} sunset={weather.daily.sunset[0].split('T')[1]} windSpeed={currentWeather.windspeed} />
      </View>
    </>
  );
}
