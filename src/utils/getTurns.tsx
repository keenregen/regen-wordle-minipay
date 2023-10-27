import { EASY, HARD, MEDIUM, VERY_EASY } from '@src/constants/misc';

export const getTurns = (difficulty: string) => {
  switch (difficulty) {
    case VERY_EASY:
      return 7;
    case EASY:
      return 6;
    case MEDIUM:
      return 4;
    case HARD:
      return 3;
    default:
      return 4;
  }
};

export const getTurnsOnSolutionLength = (length: number) => {
  switch (length) {
    case 3:
      console.log('3');
      return getTurns(VERY_EASY);

    case 4:
      return getTurns(VERY_EASY);

    case 5:
      return getTurns(EASY);

    case 6:
      return getTurns(EASY);

    case 7:
      return getTurns(MEDIUM);

    case 8:
      return getTurns(MEDIUM);

    case 9:
      return getTurns(HARD);

    case 10:
      return getTurns(HARD);

    default:
      return getTurns(MEDIUM);
  }
};
