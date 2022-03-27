import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export const useCachedResources = () => {
  const [loadingCompleted, setLoadingCompleted] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
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
