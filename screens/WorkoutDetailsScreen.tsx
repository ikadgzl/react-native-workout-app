import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, View } from 'react-native';
import { PressableText } from '../components/PressableText';
import { MontserratText } from '../components/styled/MontserratText';
import { useWorkoutById } from '../hooks/useWorkoutById';

interface DetailsParams {
  route: {
    params: {
      slug: string;
    };
  };
}

export default function WorkoutDetailsScreen({ route }: NativeStackHeaderProps & DetailsParams) {
  const [workout] = useWorkoutById(route.params.slug);

  if (!workout) return 'loading..';

  return (
    <View style={styles.container}>
      <MontserratText style={styles.header}>{workout.name}</MontserratText>
      <PressableText onPress={() => console.log('pressable text from' + workout.name)} text='Check sequence...' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },

  header: {
    marginBottom: 16,
    fontSize: 24
  }
});
