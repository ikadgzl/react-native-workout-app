export const secondsToMinutes = (seconds: number): number => {
  return parseFloat((seconds / 60).toFixed(1));
};

export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  let conjuction = '';
  if (minutes && seconds) {
    conjuction = 'and ';
  }

  return `${minutes ? `${minutes} minutes ` : ''}${conjuction}${seconds ? `${seconds} seconds` : ''}`;
};
