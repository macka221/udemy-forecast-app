import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Alert, ImageBackground } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appStyles } from './app.style';
import { Home } from './pages/home/home';
import { MeteoAPI } from './service/meteo';
import ForecastBackground from './assets/background.png';
import { Forecasts } from './pages/forecasts/Forecasts';

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: 'transparent',
  }
};

export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  // first value is a boolan that indicates if the font is loaded
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

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

  async function fetchCoordsByCity(cityRequest) {
    try {
      const coordsResponse = await MeteoAPI.fetchCoordsByCity(cityRequest);
      console.log(coordsResponse);
      setCoordinates(coordsResponse);
    } catch (error) {
      Alert.alert('Oops!', error);
    }

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

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        source={ForecastBackground}
        style={appStyles.img_background}
        imageStyle={appStyles.image}
      >
        <SafeAreaProvider>
          <SafeAreaView style={appStyles.container}>
            {isFontLoaded && weather &&
              <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }} initialRouteName='Home'>
                <Stack.Screen name='Home'>
                  {() => <Home weather={weather} city={city} onSubmitSearch={fetchCoordsByCity} />}
                </Stack.Screen>
                <Stack.Screen name='Forecasts' component={Forecasts} />
              </Stack.Navigator>
            }
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}

