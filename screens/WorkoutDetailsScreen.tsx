import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { MontserratText } from '../components/styled/MontserratText';

interface DetailsParams {
  route: {
    params: {
      slug: string;
    };
  };
}

export default function WorkoutDetailsScreen({ route }: NativeStackHeaderProps & DetailsParams) {
  return (
    <View style={styles.container}>
      <MontserratText style={styles.header}>Workout Details - {route.params.slug}</MontserratText>
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
