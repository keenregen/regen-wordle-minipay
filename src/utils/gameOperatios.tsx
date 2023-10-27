import {
  DifficultyLevels,
  EASY,
  HARD,
  MEDIUM,
  VERY_EASY,
} from '@src/constants/misc';
import {
  EASY_GAME_TIME,
  MEDIUM_GAME_TIME,
  HARD_GAME_TIME,
} from '@src/constants/quests';
import { getTurns } from './getTurns';

export const calculateScore = (
  turn: number,
  isCorrect: boolean,
  remainingTime: number,
  difficulty: DifficultyLevels
) => {
  switch (difficulty) {
    case EASY:
      return (
        100 * (isCorrect ? 1 : 0) +
        remainingTime +
        (getTurns(EASY) - turn) * 100
      );

    case MEDIUM:
      return (
        400 * (isCorrect ? 1 : 0) +
        remainingTime * 2 +
        (getTurns(MEDIUM) - turn) * 1000
      );

    case HARD:
      return (
        1000 * (isCorrect ? 1 : 0) +
        remainingTime * 3 +
        (getTurns(HARD) - turn) * 2000
      );
  }
};

export const calculateScoreBasedOnLetterCount = (
  turn: number,
  isCorrect: boolean,
  remainingTime: number,
  wordLength: number
) => {
  switch (wordLength) {
    case 3 || 4:
      return (
        100 * (isCorrect ? 1 : 0) +
        remainingTime +
        (getTurns(VERY_EASY) - turn) * 100
      );

    case 5 || 6:
      return (
        400 * (isCorrect ? 1 : 0) +
        remainingTime * 2 +
        (getTurns(EASY) - turn) * 1000
      );

    case 7 || 8:
      return (
        1000 * (isCorrect ? 1 : 0) +
        remainingTime * 3 +
        (getTurns(MEDIUM) - turn) * 2000
      );

    case 9 || 10:
      return (
        1000 * (isCorrect ? 1 : 0) +
        remainingTime * 3 +
        (getTurns(HARD) - turn) * 3000
      );
    default:
      return 0;
  }
};

export const calculateRemainingTime = (
  time: number,
  difficulty: DifficultyLevels
) => {
  let remainingTime = 0;
  switch (difficulty) {
    case EASY:
      remainingTime = EASY_GAME_TIME - time;
      break;
    case MEDIUM:
      remainingTime = MEDIUM_GAME_TIME - time;
      break;
    case HARD:
      remainingTime = HARD_GAME_TIME - time;
      break;
  }
  return remainingTime;
};

export const calculateTimeDifferenceInSeconds = (
  startDate: Date,
  endDate: Date
) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const differenceInMilliseconds = end - start;
  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

  return differenceInSeconds;
};
