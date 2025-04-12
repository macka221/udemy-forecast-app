
import { TouchableOpacity, View } from 'react-native';
import { forecastsHeaderStyles } from './ForecastsHeader.style';
import { Txt } from '../txt/txt';
import { useNavigation } from '@react-navigation/native';

export function ForecastsHeader({ city }) {
  const navigation = useNavigation();

  return (
    <View style={forecastsHeaderStyles.container}>
      <TouchableOpacity onPress={navigation.goBack} style={forecastsHeaderStyles.back_button}>
        <Txt>{'<'}</Txt>
      </TouchableOpacity>
      <View style={forecastsHeaderStyles.header_text}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt style={forecastsHeaderStyles.subtitle}>7 Day Forecasts</Txt>
      </View>
    </View>
  )
}
