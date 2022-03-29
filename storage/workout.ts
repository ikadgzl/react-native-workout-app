import data from '../data.json';
import { containsKey, getData, removeData, storeData } from '.';
import { Workout } from '../types/data';

export const initWorkouts = async (): Promise<void> => {
  if (!(await containsKey('workouts'))) {
    await storeData('workouts', data);
  }
};

export const getWorkouts = (): Promise<Workout[]> => {
  return getData('workouts');
};

export const getWorkoutById = async (slug: string): Promise<Workout | undefined> => {
  const workouts = await getWorkouts();

  return workouts.find((workout) => workout.slug === slug);
};

export const clearWorkouts = async (): Promise<void> => {
  await removeData('workouts');
};
