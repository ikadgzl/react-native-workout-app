import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { MontserratText } from '../components/styled/MontserratText';
import WorkoutItem from '../components/WorkoutItem';
import { useWorkouts } from '../hooks/useWorkouts';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const [workouts] = useWorkouts();

  return (
    <View style={styles.container}>
      <MontserratText style={styles.header}>Workouts</MontserratText>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('WorkoutDetails', { slug: item.slug })}>
            <WorkoutItem item={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.slug}
      />
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
