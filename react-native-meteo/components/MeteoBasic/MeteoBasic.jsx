import { Image, TouchableOpacity, View } from 'react-native';
import { Txt } from '../txt/txt';
import { meteoBasicStyles } from './MeteoBasic.style';
import { Clock } from '../clock/clock';
import { useNavigation } from '@react-navigation/native';

export function MeteoBasic({ temperature, interpretation, city, weather }) {
  const navigation = useNavigation();
  return (
    <>
      <View style={meteoBasicStyles.clock}>
        <Clock />
      </View>
      <View style={meteoBasicStyles.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={meteoBasicStyles.interpretation}>
        <Txt style={meteoBasicStyles.interpretation_text}>{interpretation.label}</Txt>
      </View>
      <View style={meteoBasicStyles.temperature_box}>
        <TouchableOpacity onPress={() => navigation.navigate('Forecasts', { city, ...weather })}>
          <Txt style={meteoBasicStyles.temperature}>{temperature}&deg;</Txt>
        </TouchableOpacity>
        <Image style={meteoBasicStyles.image} source={interpretation.image} />
      </View >
    </>
  )
}
