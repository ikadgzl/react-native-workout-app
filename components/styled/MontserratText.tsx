import { Text, TextProps } from 'react-native';

export const MontserratText = (props: TextProps): JSX.Element => {
  return <Text {...props} style={[props.style, { fontFamily: 'montserrat' }]} />;
};
