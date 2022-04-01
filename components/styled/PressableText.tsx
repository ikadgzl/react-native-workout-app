import { Pressable, PressableProps } from 'react-native';
import { MontserratText } from './MontserratText';

export function PressableText(props: PressableProps & { text: string }) {
  return (
    <Pressable {...props}>
      <MontserratText style={{ textDecorationLine: 'underline' }}>{props.text}</MontserratText>
    </Pressable>
  );
}
