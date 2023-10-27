import AnswerSection from './AnswerSection';
import ControllerSection from './ControllerSection';
import QuestionSection from './QuestionSection';
import styles from './index.module.scss';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { MdOutlineArrowBack, MdOutlineTimer } from 'react-icons/md';
import Timer from '../Timer';
import { Press_Start_2P } from 'next/font/google';
import { QuestionItem, SetupConfigs, Option } from '@src/models/quest';

const press_Start_2P = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
});

interface Props {
  questionItem: QuestionItem;
  currentQuestion: number;
  totalNumberOfQuestions: number;
  onHandleAnswer: (item: Option) => void;
  onHandleFinish: () => void;
  setupConfigs: SetupConfigs;
}

export default function QuestLayout({
  currentQuestion,
  questionItem,
  totalNumberOfQuestions,
  onHandleAnswer,
  setupConfigs,
  onHandleFinish,
}: Props) {
  const [isTimerVisible, setIsTimerVisible] = useState(true);
  const [answerSectionKey, setAnswerSectionKey] = useState(Date.now());

  useEffect(() => {
    setAnswerSectionKey(Date.now());
  }, [questionItem]);

  const goBack = () => {
    router.push(`/quests`);
  };

  const toggleTimerVisibility = () => {
    setIsTimerVisible((prev) => {
      return !prev;
    });
  };

  const finishQuest = () => {
    onHandleFinish();
  };

  return (
    <div className={`${styles.main_container}`}>
      <div className={`${styles.header} w-full flex justify-center p-6`}>
        <div
          className={`${press_Start_2P.className} ${
            isTimerVisible ? 'text-white m-0' : 'text-transparent'
          } `}
        >
          <Timer
            difficulty={setupConfigs.difficulty}
            onTimeFinish={finishQuest}
          />
        </div>

        <div
          className={`${styles.button_container} ${styles.button_container1}`}
        >
          <Button variant="light" onClick={goBack}>
            <MdOutlineArrowBack style={{ width: '30px', height: '30px' }} />
          </Button>
        </div>
        <div
          className={`${styles.button_container} ${styles.button_container2}`}
        >
          <Button variant="light" onClick={toggleTimerVisibility}>
            <MdOutlineTimer style={{ width: '30px', height: '30px' }} />
          </Button>
        </div>
      </div>
      <div className={`${styles.question_section}`}>
        {questionItem.question && (
          <QuestionSection
            questionText={questionItem.question}
          ></QuestionSection>
        )}
      </div>
      <div className={`${styles.answer_section}`}>
        {questionItem.options && questionItem.correctAnswer && (
          <AnswerSection
            key={answerSectionKey}
            options={questionItem.options}
            correctOption={questionItem.correctAnswer}
            onHandleAnswer={onHandleAnswer}
          ></AnswerSection>
        )}
      </div>
      <div className={`${styles.controller_section}`}>
        <ControllerSection
          totalNumberOfQuestions={totalNumberOfQuestions}
          currentQuestion={currentQuestion}
        ></ControllerSection>
      </div>
    </div>
  );
}
