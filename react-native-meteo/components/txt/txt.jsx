import { Text, useWindowDimensions } from 'react-native';
import { txtStyles } from './txt.style';

const IPHONE_13_RATIO = 0.00118483412322749;

export function Txt({ children, style, ...restProps }) {
  const fontSize = style?.fontSize || txtStyles.text.fontSize;

  // Can use react-native-responsive screen to calculate screen size differences
  const { height } = useWindowDimensions();

  return (
    <Text style={[txtStyles.text, style, { fontSize: fontSize * IPHONE_13_RATIO * height }]} {...restProps}>{children}</Text>
  )
}
