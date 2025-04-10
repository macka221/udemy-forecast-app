
import { Image, View } from 'react-native';
import { Txt } from '../txt/txt';
import { meteoBasicStyles } from './MeteoBasic.style';
import { Clock } from '../clock/clock';

export function MeteoBasic({ temperature, interpretation, city }) {
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
      </View >
      <View style={meteoBasicStyles.temperature_box}>
        <Txt style={meteoBasicStyles.temperature}>{temperature}&deg;</Txt>
        <Image style={meteoBasicStyles.image} source={interpretation.image} />
      </View>
    </>
  )
}
