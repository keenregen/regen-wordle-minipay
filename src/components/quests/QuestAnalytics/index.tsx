import { Button } from 'react-bootstrap';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { SetupConfigs } from '@src/models/quest';

interface Props {
  setupConfigs: SetupConfigs;
  correctAnswers: number;
  time: number | string;
  totalQuestion: number;
  score: number;
  onHandlePlayAgain: () => void;
}

export default function QuestAnalytics({
  setupConfigs,
  correctAnswers,
  time,
  totalQuestion,
  score,
  onHandlePlayAgain,
}: Props) {
  const router = useRouter();

  const handlePlayAgain = () => {
    onHandlePlayAgain();
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper}>
        <div className={styles.difficulty_section}>
          <h2 className="text-white font-extrabold text-center">
            QUEST STATISTICS
          </h2>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.difficulty_section}>
          <h3 className="text-center mb-0 text-white font-bold">
            {`Difficulty: `}{' '}
            <span className="capitalize">{setupConfigs.difficulty}</span>
          </h3>
        </div>
        <div className={styles.difficulty_section}>
          <h3 className="text-center mb-0 text-white font-bold">{`Correct Answers: ${correctAnswers} / ${totalQuestion}`}</h3>
        </div>
        <div className={styles.difficulty_section}>
          <h3 className="text-center mb-0 text-white font-bold">
            {`Duration: ${time}`} seconds
          </h3>
        </div>
        <div className={styles.difficulty_section}>
          <h3 className="text-center mb-0 text-white font-bold">
            {`Score: ${score}`} points
          </h3>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.start_button_section}>
          <div className=" flex flex-column items-center">
            <Button
              className={styles.play_again_button}
              onClick={() => handlePlayAgain()}
            >
              PLAY AGAIN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
