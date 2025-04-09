import { Text, View } from 'react-native';
import { homeStyle } from './home.style.js';

export function Home() {
  return (
    <>
      <View style={ homeStyle.meteo_basic }>
        <Text style={ homeStyle.text }>
            Basic Weather Info
        </Text>
      </View>
      <View style={ homeStyle.searchbar_container }>
        <Text style={ homeStyle.text }>
            Search Bar
        </Text>
      </View>
      <View style={ homeStyle.meteo_advanced }>
        <Text style={ homeStyle.text }>
          Advanced Weather Info
        </Text>
      </View>
    </>
  );
}
