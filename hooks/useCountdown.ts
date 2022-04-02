import { useState, useEffect, useRef } from 'react';

export const useCountdown = (idx: number, initialCount: number) => {
  const intervalRef = useRef<number>();
  const [countdown, setCountdown] = useState<number>(initialCount);

  useEffect(() => {
    if (idx === -1) return;

    intervalRef.current = window.setInterval(() => {
      setCountdown((count) => count - 1);
    }, 1000);

    return cleanup;
  }, [idx]);

  useEffect(() => {
    setCountdown(initialCount);
  }, [initialCount]);

  console.log(countdown);

  useEffect(() => {
    if (countdown === 0) {
      cleanup();
    }
  }, [countdown]);

  const cleanup = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  };

  return [countdown] as const;
};
