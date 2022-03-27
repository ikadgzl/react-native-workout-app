import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { FlatList, FlatListProps, Pressable, StyleSheet, Text, View } from 'react-native';
import data from '../data.json';
import { Workout } from '../types/data';
import WorkoutItem from '../components/WorkoutItem';
import { MontserratText } from '../components/styled/MontserratText';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  const pressableWorkoutItem = ({ item }: { item: Workout }) => (
    <Pressable onPress={() => console.log(item.name)}>
      <WorkoutItem item={item} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <MontserratText style={styles.header}> helo</MontserratText>
      <Text style={styles.header}>Workouts</Text>
      <FlatList data={data as Workout[]} renderItem={pressableWorkoutItem} keyExtractor={(item) => item.slug} />
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
