
import { useRoute } from '@react-navigation/native';
import { ForecastsHeader } from '../../components/ForecastsHeader/ForecastsHeader';
import { ForecastListItem } from '../../components/ForecastListItem/ForecastListItem';
import { View } from 'react-native';
import { DAYS, getWeatherInterpretation } from '../../utils/meteo.utils';

export function Forecasts({ }) {
  const { params } = useRoute();

  const forecastList = (
    <View>
      {
        params.time.map((time, index) => {
          const weatherCode = params.weathercode[index];
          const interpretationImage = getWeatherInterpretation(weatherCode).image;
          const temperature = params.temperature_2m_max[index];
          const date = new Date(time);
          const dayOfWeek = DAYS[date.getDay()];
          const formattedDate = date.toLocaleDateString('default', { day: 'numeric', month: 'numeric' })
          return (
            <ForecastListItem
              image={interpretationImage}
              day={dayOfWeek}
              date={formattedDate}
              temperature={temperature.toFixed(0)}
              key={time}
            />);
        })
      }
    </View>
  );

  return (
    <>
      <ForecastsHeader city={params.city} />
      {forecastList}
    </>
  );
}

