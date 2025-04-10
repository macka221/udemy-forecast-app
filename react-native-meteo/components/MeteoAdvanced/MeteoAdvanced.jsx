
import { View } from 'react-native';
import { meteoAdvancedStyles, StyledContainer, StyledLabel, StyledValue } from './MeteoAdvanced.style';
import { Txt } from '../txt/txt';

export function MeteoAdvanced({ sunset, sunrise, windSpeed }) {
  return (
    <View style={meteoAdvancedStyles.container}>
      <StyledContainer>
        <StyledLabel>asdasd{sunrise}</StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>asdae{sunset}</StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>
      <StyledContainer>
        <StyledLabel>eqweqw{windSpeed}</StyledLabel>
        <StyledValue>Wind Speed</StyledValue>
      </StyledContainer>
    </View >
  )
}
