import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Workout } from '../types/data';
import { MontserratText } from '../components/styled/MontserratText';
import WorkoutItem from '../components/WorkoutItem';
import { useEffect, useState } from 'react';
import { getWorkouts } from '../storage/workout';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const getWorkoutData = async () => {
      const workoutData = await getWorkouts();

      setWorkouts(workoutData);
    };

    getWorkoutData();
  }, []);

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
