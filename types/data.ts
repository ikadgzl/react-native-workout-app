export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export enum SequenceType {
  EXERCISE = 'exercise',
  BREAK = 'break',
  STRETCH = 'stretch'
}

export interface SequenceItem {
  slug: string;
  name: string;
  type: SequenceType;
  duration: number;
  reps?: number;
}

export interface Workout {
  slug: string;
  name: string;
  duration: number;
  difficulty: Difficulty;
  sequence: SequenceItem[];
}
