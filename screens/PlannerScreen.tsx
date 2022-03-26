import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

export default function PlannerScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View>
      <Text>This is planner-screen</Text>
      <Button title='Go to planner' onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
