import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { useFonts } from 'expo-font';
import { appStyles } from './app.style';
import { Home } from './pages/home/home';
import { MeteoAPI } from './service/meteo';
import ForecastBackground from './assets/background.png';

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  // first value is a boolan that indicates if the font is loaded
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  console.log(isFontLoaded);
  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherByCoords(coordinates);
      fetchCityByCoords(coordinates);
    }
  }, [coordinates])

  async function fetchWeatherByCoords(coords) {
    const weatherResponse = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  };

  async function fetchCityByCoords(coords) {
    const cityResponse = await MeteoAPI.fetchCityByCoords(coords);
    setCity(cityResponse);
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
      source={ForecastBackground}
      style={appStyles.img_background}
      imageStyle={appStyles.image}
    >
      <SafeAreaProvider>
        <SafeAreaView style={appStyles.container}>
          {isFontLoaded && weather && <Home weather={weather} city={city} />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

