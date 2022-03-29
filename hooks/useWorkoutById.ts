import { useState, useEffect } from 'react';
import { getWorkoutById } from '../storage/workout';
import { Workout } from '../types/data';

export const useWorkoutById = (slug: string) => {
  const [workout, setWorkout] = useState<Workout>();

  useEffect(() => {
    const fetchWorkout = async () => {
      const fetchedWorkout = await getWorkoutById(slug);

      setWorkout(fetchedWorkout);
    };

    fetchWorkout();
  }, []);

  return [workout] as const;
};
