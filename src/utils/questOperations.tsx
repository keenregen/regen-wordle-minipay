import { DifficultyLevels, EASY, HARD, MEDIUM } from '@src/constants/misc';
import {
  EASY_GAME_TIME,
  HARD_GAME_TIME,
  MEDIUM_GAME_TIME,
  agricultureQuestions,
  buildingQuestions,
  energyQuestions,
  forestryQuestions,
  wasteQuestions,
  waterQuestions,
} from '@src/constants/quests';
import { QuestionItem, Option } from '@src/models/quest';

export const calculcateCorrectAnswers = (
  questionItem: QuestionItem[],
  answers: Option[]
): number => {
  let numberOfCorrectAnswers = 0;
  questionItem.map((item, index) => {
    if (item.correctAnswer === answers[index]?.id) {
      numberOfCorrectAnswers++;
    }
  });

  return numberOfCorrectAnswers;
};

export const calculatePoints = (
  questionItems: QuestionItem[],
  answers: Option[],
  difficulty: DifficultyLevels,
  remainingTime: number
): number => {
  const correctAnswers = calculcateCorrectAnswers(questionItems, answers);
  const incorrectAnswers = questionItems.length - correctAnswers;
  const difficultyFactor = getDifficultyFactor(difficulty);
  const score =
    correctAnswers * 100 * difficultyFactor -
    incorrectAnswers * 50 +
    (correctAnswers - incorrectAnswers > 0
      ? remainingTime * (correctAnswers - incorrectAnswers)
      : 0);
  return score > 0 ? score : 0;
};

export const getDifficultyFactor = (difficulty: DifficultyLevels) => {
  switch (difficulty) {
    case 'easy':
      return 1;
    case 'medium':
      return 1.5;
    case 'hard':
      return 2;
  }
};

export const getQuestions = (track: string, difficulty: DifficultyLevels) => {
  let questionPool: QuestionItem[] = [];
  switch (track) {
    case 'regenerative_agriculture':
      questionPool = structuredClone(agricultureQuestions);
      break;
    case 'regenerative_energy':
      questionPool = structuredClone(energyQuestions);
      break;
    case 'regenerative_buildings':
      questionPool = structuredClone(buildingQuestions);
      break;
    case 'regenerative_forestry':
      questionPool = structuredClone(forestryQuestions);
      break;
    case 'water_management':
      questionPool = structuredClone(waterQuestions);
      break;
    case 'waste_management':
      questionPool = structuredClone(wasteQuestions);
      break;
  }

  let questionSet: QuestionItem[] = [];
  let selectedQuestions: number[] = [];
  switch (difficulty) {
    case 'easy':
      selectedQuestions = generateUniqueNumbers(5, questionPool.length);
      break;

    case 'medium':
      selectedQuestions = generateUniqueNumbers(10, questionPool.length);
      break;

    case 'hard':
      selectedQuestions = generateUniqueNumbers(15, questionPool.length);
      break;
  }
  questionSet = getElementsAtIndices(questionPool, selectedQuestions);
  return questionSet;
};

export const generateUniqueNumbers = (amount: number, length: number) => {
  const numbers = new Set();
  while (numbers.size < amount) {
    const randomNumber = Math.floor(Math.random() * length);
    numbers.add(randomNumber);
  }

  return Array.from(numbers) as number[];
};

export const getElementsAtIndices = (
  array: QuestionItem[],
  indexes: number[]
) => {
  const elements = [];
  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    elements.push(array[index]);
  }
  return elements;
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

export const shuffleArray = (questions: any[]) => {
  // Make a copy of the original array to avoid modifying the input array
  let shuffledArray = questions.slice();
  let currentIndex = shuffledArray.length;

  // While there are elements remaining to shuffle
  while (currentIndex !== 0) {
    // Generate a random index from 0 to currentIndex (exclusive)
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap the current element with the randomly selected element
    let temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
};
