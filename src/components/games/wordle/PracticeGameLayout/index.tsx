import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import useWordle from '@src/hooks/useWordle';
import { Button } from 'react-bootstrap';
import { Press_Start_2P } from 'next/font/google';
import Timer from '@src/components/quests/Timer';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { fetcherWithNoCache } from '@src/utils/fetcher';
import { SetupConfigs } from '../GameSetup';
import { getTurns, getTurnsOnSolutionLength } from '@src/utils/getTurns';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { words } from '@src/constants/words';
import {
  calculateRemainingTime,
  calculateScoreBasedOnLetterCount,
  calculateTimeDifferenceInSeconds,
} from '@src/utils/gameOperatios';

const press_Start_2P = Press_Start_2P({
  weight: ['400'],
  subsets: ['cyrillic'],
});

const Grid = dynamic(() => import('../Grid'));
const Keypad = dynamic(() => import('../Keypad'));
const Modal = dynamic(() => import('../Modal'));
type wordType = 'environmental' | 'blockchain';

interface Props {
  setupConfigs: SetupConfigs;
}

export default function PracticeGameLayout({ setupConfigs }: Props) {
  const [solution, setSolution] = useState('');
  const letters = useSelector(
    (state: RootState) => state.gameModalSlice.letters
  );
  const subject = useSelector(
    (state: RootState) => state.gameModalSlice.subject
  );

  const [isTimerVisible, setIsTimerVisible] = useState(true);
  const [resetTimer, setResetTimer] = useState(new Date());
  const [stopTimer, setStopTimer] = useState(false);
  const [score, setScore] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const {
    currentGuess,
    guesses,
    turn,
    isCorrect,
    usedKeys,
    handleKeyup,
    onGameReset,
  } = useWordle(solution);

  const prepareSolution = (letters: string, subject: wordType) => {
    const selectedWordGroup = (words[subject] as any)[letters];
    const randomIndex = Math.floor(Math.random() * selectedWordGroup.length);
    setSolution(selectedWordGroup[randomIndex]);
  };

  useEffect(() => {
    setCurrentTime(new Date());
    resetTheGame();
    prepareSolution(letters, subject as wordType);
  }, [letters, subject]);

  // DO NOT DELETE THE FOLLOWING LINES, THEY WILL BE EFFECTIVE ONCE THE API IS READY
  // const fetchData = useCallback(async () => {
  //   let word = '';
  //   word = await fetcherWithNoCache(
  //     'https://regenwise.xyz/api/words?difficulty=easy'
  //   );
  //   setSolution(word.toLowerCase());
  // }, [setupConfigs.difficulty]);

  // useEffect(() => {
  //   fetchData();
  // }, [setupConfigs, fetchData]);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect) {
      calculateScoreAndTime();
      setTimeout(() => {
        setShowModal(true);
        setStopTimer(true);
      }, 500);
      window.removeEventListener('keyup', handleKeyup);
    }
    if (turn >= getTurnsOnSolutionLength(solution.length)) {
      calculateScoreAndTime();
      setTimeout(() => {
        setShowModal(true);
        setStopTimer(true);
      }, 500);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, setupConfigs.difficulty, turn]);

  const resetTheGame = () => {
    onGameReset();
    setShowModal(false);
    setStopTimer(false);
    setResetTimer(new Date());
    prepareSolution(letters, subject as wordType);
    // fetchData();
  };

  const handleKeyboardClick = (val: string) => {
    window.dispatchEvent(new KeyboardEvent('keyup', { key: val }));
  };

  const calculateScoreAndTime = () => {
    const timePassed = calculateTimeDifferenceInSeconds(
      currentTime,
      new Date()
    );

    const remainingTime = calculateRemainingTime(
      timePassed,
      setupConfigs.difficulty
    );

    let score = calculateScoreBasedOnLetterCount(
      turn,
      isCorrect,
      remainingTime,
      solution.length
    );
    setScore(score);
  };

  return solution ? (
    <div className={`${styles.main_container} flex flex-col `}>
      <div className="flex-1 flex flex-col gap-2 justify-center items-center">
        <Grid
          key={solution}
          guesses={guesses}
          currentGuess={currentGuess}
          turn={turn}
          wordLength={solution.length}
        />
        <Keypad usedKeys={usedKeys} onHandleClick={handleKeyboardClick} />
      </div>
      <div className={`${styles.header} w-full flex justify-center py-4`}>
        <div
          className={`${press_Start_2P.className} ${
            isTimerVisible ? 'text-white m-0' : 'text-transparent'
          }`}
        >
          <Timer
            resetTimer={resetTimer}
            stopTimer={stopTimer}
            difficulty={'easy'}
            onTimeFinish={() => setShowModal(true)}
          />
        </div>

        <>
          <div
            className={`${styles.button_container} ${styles.button_container1}`}
          >
            {/* <Button variant="light" onClick={goBack}>
              <MdOutlineArrowBack style={{ width: '30px', height: '30px' }} />
            </Button> */}
          </div>
          <div
            className={`${styles.button_container} ${styles.button_container2}`}
          >
            {/* <Button variant="light" onClick={toggleTimerVisibility}>
              <MdOutlineTimer style={{ width: '30px', height: '30px' }} />
            </Button> */}
          </div>
        </>
      </div>
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          score={score}
          turn={turn}
          solution={solution}
          closeModal={resetTheGame}
        />
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
}
