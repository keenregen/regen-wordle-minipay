import { useState, useEffect } from 'react';
import { DifficultyLevels, EASY, HARD, MEDIUM } from '@src/constants/misc';
import {
  EASY_GAME_TIME,
  MEDIUM_GAME_TIME,
  HARD_GAME_TIME,
} from '@src/constants/quests';

interface Props {
  difficulty: DifficultyLevels;
  onTimeFinish: () => void;
  resetTimer?: Date;
  stopTimer?: boolean;
}

function Timer({
  difficulty,
  onTimeFinish,
  resetTimer,
  stopTimer = false,
}: Props) {
  const [time, setTime] = useState(EASY_GAME_TIME);

  useEffect(() => {
    switch (difficulty) {
      case EASY:
        setTime(EASY_GAME_TIME);
        break;
      case MEDIUM:
        setTime(MEDIUM_GAME_TIME);
        break;
      case HARD:
        setTime(HARD_GAME_TIME);
        break;
    }
  }, [difficulty, resetTimer]);

  useEffect(() => {
    let timerId: any;
    if (time > 0 && stopTimer === false) {
      timerId = setInterval(() => {
        setTime((prevTime) => {
          return prevTime - 1;
        });
      }, 1000);
    } else {
      onTimeFinish();
    }
    return () => {
      clearInterval(timerId);
    };
  }, [time, stopTimer]);

  const formatTime = (timeInSeconds: any) => {
    const hours = Math.floor(timeInSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1 className="m-0">{formatTime(time)}</h1>
    </div>
  );
}

export default Timer;
