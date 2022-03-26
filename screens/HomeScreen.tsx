import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import data from '../data.json';
import { Workout } from '../types/data';
import WorkoutItem from '../components/WorkoutItem';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workouts</Text>
      <FlatList data={data as Workout[]} renderItem={WorkoutItem} keyExtractor={(item) => item.slug} />
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
