import { DifficultyLevels } from '@src/constants/misc';

export interface QuestState {
  questions: QuestionItem[];
  answers: Option[];
  correctAnswers: number;
  totalQuestTime: number;
  points: number;
}

export interface SetupConfigs {
  difficulty: DifficultyLevels;
  track: string;
}

export interface Option {
  id: string;
  option: string;
}

export interface QuestionItem {
  question: string;
  options: Option[];
  correctAnswer: string;
}

export interface DifficultyButton {
  id: DifficultyLevels;
  name: string;
  link: DifficultyLevels;
}
