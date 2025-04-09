import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { appStyles } from './app.style';
import { Home } from './pages/home/home'; 
import ForecastBackground from './assets/background.png';

export default function App() {
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

