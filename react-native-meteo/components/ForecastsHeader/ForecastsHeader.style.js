import { StyleSheet } from 'react-native';

const BACK_BUTTON_WIDTH = 30;

export const forecastsHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  subtitle: {
    fontSize: 20,
  },
  header_text: {
    flex: 1,
    alignItems: 'center',
    marginRight: BACK_BUTTON_WIDTH,
  },
  back_button: {
    width: BACK_BUTTON_WIDTH,
  },
});
