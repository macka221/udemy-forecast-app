import { Text } from 'react-native';
import { txtStyles } from './txt.style';

export function Txt({ children, style, ...restProps }) {
  return (
    <Text style={[txtStyles.text, style]} {...restProps}>{children}</Text>
  )
}
