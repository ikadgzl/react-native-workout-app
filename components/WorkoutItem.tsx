import { StyleSheet, Text, View } from 'react-native';
import { Workout } from '../types/data';

export default function WorkoutItem({ item }: { item: Workout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.duration}>Duration: {item.duration}</Text>
      <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#FFF'
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },

  duration: {
    fontSize: 16
  },

  difficulty: {
    fontSize: 16
  }
});
