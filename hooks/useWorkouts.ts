import { useState, useEffect } from 'react';
import { getWorkouts } from '../storage/workout';
import { Workout } from '../types/data';

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const getWorkoutData = async () => {
      const workoutData = await getWorkouts();

      setWorkouts(workoutData);
    };

    getWorkoutData();
  }, []);

  return [workouts] as const;
};
