import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { initWorkouts } from '../storage/workout';

export const useCachedResources = () => {
  const [loadingCompleted, setLoadingCompleted] = useState<boolean>(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await initWorkouts();
        await Font.loadAsync({
          montserrat: require('../fonts/Montserrat-Regular.ttf'),
          'montserrat-bold': require('../fonts/Montserrat-Bold.ttf')
        });
      } catch (error) {
        console.log(error);
      }

      setLoadingCompleted(true);
    };

    loadResources();
  }, []);

  return [loadingCompleted] as const;
};
