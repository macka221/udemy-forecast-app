
import { View } from 'react-native';
import { meteoAdvancedStyles, StyledContainer, StyledLabel, StyledValue } from './MeteoAdvanced.style';
import { Txt } from '../txt/txt';

export function MeteoAdvanced({ sunset, sunrise, windSpeed }) {
  return (
    <View style={meteoAdvancedStyles.container}>
      <StyledContainer>
        <StyledLabel>{sunrise}</StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{sunset}</StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>{windSpeed} km/hr</StyledLabel>
        <StyledValue>WindSpeed</StyledValue>
      </StyledContainer>
    </View >
  )
}
