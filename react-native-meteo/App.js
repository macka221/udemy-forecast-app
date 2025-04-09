import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { appStyles } from './app.style';
import { Home } from './pages/home/home';
import { MeteoAPI } from './service/meteo';
import ForecastBackground from './assets/background.png';

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
   getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
    }
  }, [coordinates])

  async function fetchWeatherByCoords(coords) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  };
 
  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({
        lat: '48.85',
        lng: '2.35',
      });
    }
  }

  console.log(coordinates);
  console.log(weather);

  return (
    <ImageBackground 
      source={ ForecastBackground } 
      style={ appStyles.img_background }
      imageStyle={ appStyles.image }
    >
      <SafeAreaProvider>
          <SafeAreaView style={ appStyles.container }>
            <Home />
          </SafeAreaView>
      </SafeAreaProvider>
  </ImageBackground>
  );
}

