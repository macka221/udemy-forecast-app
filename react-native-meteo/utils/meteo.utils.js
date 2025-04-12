export const WEATHER_INTERPRETATIONS = [
  {
    codes: [0],
    image: require('../assets/meteo_img/sun.png'),
    label: 'Sunny',
  },
  {
    codes: [1, 2, 3, 45, 48],
    image: require('../assets/meteo_img/clouds.png'),
    label: 'Cloudy',
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    image: require('../assets/meteo_img/rain.png'),
    label: 'Rainy',
  },
  {
    codes: [71, 73, 75, 77],
    image: require('../assets/meteo_img/snow.png'),
    label: 'Snowy',
  },
  {
    codes: [96, 99],
    image: require('../assets/meteo_img/thunder.png'),
    label: 'Thunderous',
  },
];

export function getWeatherInterpretation(code) {
  return WEATHER_INTERPRETATIONS.find(interpretation => interpretation.codes.includes(code));
}

export const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

