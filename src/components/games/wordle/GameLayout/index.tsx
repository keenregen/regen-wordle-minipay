import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { SetupConfigs } from '../GameSetup';
import { EASY, MEDIUM, HARD, DifficultyLevels } from '@src/constants/misc';
import { fetcherWithNoCache } from '@src/utils/fetcher';
import { getTurns } from '@src/utils/getTurns';
import useWordle from '@src/hooks/useWordle';
import { Button } from 'react-bootstrap';
import { MdOutlineArrowBack } from 'react-icons/md';
import { MdOutlineTimer } from 'react-icons/md';
import { Press_Start_2P } from 'next/font/google';
import Timer from '@src/components/quests/Timer';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import {
  calculateRemainingTime,
  calculateScore,
  calculateTimeDifferenceInSeconds,
} from '@src/utils/gameOperatios';

const press_Start_2P = Press_Start_2P({
  weight: ['400'],
  subsets: ['cyrillic'],
});

const Grid = dynamic(() => import('../Grid'));
const Keypad = dynamic(() => import('../Keypad'));
const Modal = dynamic(() => import('../Modal'));

interface Props {
  setupConfigs: SetupConfigs;
}

export default function GameLayout({ setupConfigs }: Props) {
  const [solution, setSolution] = useState('');
  const [isTimerVisible, setIsTimerVisible] = useState(true);
  const [resetTimer, setResetTimer] = useState(new Date());
  const [stopTimer, setStopTimer] = useState(false);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [score, setScore] = useState(0);
  const {
    currentGuess,
    guesses,
    turn,
    isCorrect,
    usedKeys,
    handleKeyup,
    onGameReset,
  } = useWordle(solution);

  const toggleTimerVisibility = () => {
    setIsTimerVisible((prev) => {
      return !prev;
    });
  };

  const fetchData = useCallback(async () => {
    let word = '';
    setCurrentTime(new Date());
    switch (setupConfigs.difficulty) {
      case EASY:
        word = await fetcherWithNoCache(
          'https://regenwise.xyz/api/words?difficulty=easy'
        );
        setSolution(word.toLowerCase());
        break;
      case MEDIUM:
        word = await fetcherWithNoCache(
          'https://regenwise.xyz/api/words?difficulty=medium'
        );
        setSolution(word.toLowerCase());
        break;
      case HARD:
        word = await fetcherWithNoCache(
          'https://regenwise.xyz/api/words?difficulty=hard'
        );
        setSolution(word.toLowerCase());
        break;
      default:
        break;
    }
  }, [setupConfigs.difficulty]);

  useEffect(() => {
    fetchData();
  }, [setupConfigs, fetchData]);

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
    if (turn >= getTurns(setupConfigs.difficulty)) {
      calculateScoreAndTime();
      setTimeout(() => {
        setShowModal(true);
        setStopTimer(true);
      }, 500);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, setupConfigs.difficulty, turn]);

  const calculateScoreAndTime = () => {
    const timePassed = calculateTimeDifferenceInSeconds(
      currentTime,
      new Date()
    );

    const remainingTime = calculateRemainingTime(
      timePassed,
      setupConfigs.difficulty
    );

    let score = calculateScore(
      turn,
      isCorrect,
      remainingTime,
      setupConfigs.difficulty
    );
    setScore(score);
  };

  const resetTheGame = () => {
    onGameReset();
    setShowModal(false);
    setStopTimer(false);
    setResetTimer(new Date());
    fetchData();
  };

  const handleKeyboardClick = (val: string) => {
    window.dispatchEvent(new KeyboardEvent('keyup', { key: val }));
  };

  const goBack = () => {
    router.push(`/games`);
  };

  return solution ? (
    <div className={`${styles.main_container} flex flex-col `}>
      <div className="flex-1 flex flex-col gap-2 justify-center items-center">
        <Grid
          guesses={guesses}
          currentGuess={currentGuess}
          turn={turn}
          wordLength={solution.length}
        />
        <Keypad usedKeys={usedKeys} onHandleClick={handleKeyboardClick} />
      </div>
      <div className={`${styles.header} w-full flex justify-center py-12`}>
        <div
          className={`${press_Start_2P.className} ${
            isTimerVisible ? 'text-white m-0' : 'text-transparent'
          }`}
        >
          <Timer
            resetTimer={resetTimer}
            stopTimer={stopTimer}
            difficulty={setupConfigs.difficulty}
            onTimeFinish={() => setShowModal(true)}
          />
        </div>

        <>
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
            <Button variant="light">
              {/* <MdOutlineTimer
                style={{ width: '30px', height: '30px' }}
                onClick={toggleTimerVisibility}
              /> */}
            </Button>
          </div>
        </>
      </div>
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          score={score}
          turn={turn}
          solution={solution}
          closeModal={() => resetTheGame()}
        />
      )}
    </div>
  ) : (
    <div className="text-white">Loading...</div>
  );
}
