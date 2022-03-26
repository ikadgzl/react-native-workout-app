import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View>
      <Text>This is home-screen</Text>
      <Button title='Go to planner' onPress={() => navigation.navigate('Planner')} />
    </View>
  );
}
