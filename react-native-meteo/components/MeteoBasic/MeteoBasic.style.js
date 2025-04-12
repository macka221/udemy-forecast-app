import { StyleSheet } from 'react-native';

export const meteoBasicStyles = StyleSheet.create({
  image: {
    height: 90,
    width: 90,
  },
  clock: {
    alignItems: 'flex-end',
  },
  interpretation: {
    alignSelf: 'flex-end',
    transform: [{ rotate: '-90deg' }],
  },
  interpretation_text: {
    fontSize: 20,
  },
  temperature: {
    fontSize: 150,
  },
  temperature_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
});
