import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { PressableText } from '../components/styled/PressableText';
import { MontserratText } from '../components/styled/MontserratText';
import { useWorkoutById } from '../hooks/useWorkoutById';
import { Modal } from '../components/Modal';
import { formatTime } from '../utils/time';
import { FontAwesome } from '@expo/vector-icons';
import WorkoutItem from '../components/WorkoutItem';
import { useEffect, useState } from 'react';
import { SequenceItem } from '../types/data';
import { useCountdown } from '../hooks/useCountdown';

interface DetailsParams {
  route: {
    params: {
      slug: string;
    };
  };
}

export default function WorkoutDetailsScreen({ route }: NativeStackHeaderProps & DetailsParams) {
  const [workout] = useWorkoutById(route.params.slug);
  const [sequence, setSequence] = useState<SequenceItem[]>([]);
  const [trackerIndex, setTrackerIndex] = useState<number>(-1);

  const [countdown] = useCountdown(trackerIndex, trackerIndex >= 0 ? sequence[trackerIndex].duration : -1);

  const addItemToSequence = (idx: number) => {
    setSequence([...sequence, workout!.sequence[idx]]);
    setTrackerIndex(idx);
  };

  if (!workout) return null;

  return (
    <View style={styles.container}>
      <WorkoutItem item={workout}>
        <Modal activator={({ handleOpen }) => <PressableText onPress={handleOpen} text='Check sequence..' />}>
          <View>
            {workout.sequence.map((s, idx) => (
              <View style={styles.sequenceItem} key={s.slug}>
                <MontserratText>
                  {s.name} - {s.type} - {formatTime(s.duration)}
                </MontserratText>
                {idx !== workout.sequence.length - 1 && <FontAwesome name='arrow-down' size={24} />}
              </View>
            ))}
          </View>
        </Modal>
      </WorkoutItem>

      <View>{sequence.length === 0 && <FontAwesome name='play-circle-o' size={48} onPress={() => addItemToSequence(0)} />}</View>
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
  },

  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  sequenceItem: {
    alignItems: 'center'
  }
});
