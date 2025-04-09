
import { Image, View } from 'react-native';
import { Txt } from '../txt/txt';
import { meteoBasicStyles } from './MeteoBasic.style';

export function MeteoBasic({ temperature, interpretation }) {
  return (
    <>
      <View style={meteoBasicStyles.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={meteoBasicStyles.city}>
        <Txt>City</Txt>
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
