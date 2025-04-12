
import { Image, View } from 'react-native';
import { forecastListItemStyles } from './ForecastListItem.style';
import { Txt } from '../txt/txt';

export function ForecastListItem({ image, day, date, temperature }) {
  return (
    <View style={forecastListItemStyles.container}>
      <Image source={image} style={forecastListItemStyles.image} />
      <Txt style={forecastListItemStyles.day}>{day}</Txt>
      <Txt style={forecastListItemStyles.date}>{date}</Txt>
      <Txt style={forecastListItemStyles.temperature}>{temperature}&deg;</Txt>
    </View>
  );
}
