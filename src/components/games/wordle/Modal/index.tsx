import styles from "./index.module.scss";
import { Button } from "react-bootstrap";

interface Props {
  solution: string;
  isCorrect: boolean;
  score?: number;
  turn: number;
  closeModal: () => void;
}

export default function Modal({
  isCorrect,
  solution,
  score,
  turn,
  closeModal,
}: Props) {
  return (
    <div className={styles.main_container}>
      <div className="flex flex-col justify-center">
        {isCorrect ? (
          <>
            <h1 className="text-center pb-4 text-2xl md:text-4xl font-extrabold">
              Correct!
            </h1>
            {score ? (
              <p className="pb-2 text-center">
                Your score is <span className={styles.solution}>{score}</span>
              </p>
            ) : (
              <></>
            )}
            <p className="pb-2 text-center">
              The word was <span className={styles.solution}>{solution}</span>
            </p>
            <p className="pb-2 text-center">
              You found The Correct Word in {turn} guesses!
            </p>
            <p className="pb-2 text-center">Do you know the word's meaning?</p>
            <Button variant="primary" onClick={closeModal}>
              Continue To Play
            </Button>
            <br />
          </>
        ) : (
          <>
            <h1 className="text-center pb-4 text-2xl md:text-4xl font-extrabold">
              No Correct Guess <br /> No Problem!
            </h1>
            {score ? (
              <p className="pb-2 text-center">
                Your score is <span className={styles.solution}>{score}</span>
              </p>
            ) : (
              <></>
            )}
            <p className="pb-2 text-center">
              The word was <span className={styles.solution}>{solution}</span>
            </p>
            <p className="pb-2 text-center">Do you know the word's meaning?</p>
            <Button variant="primary" onClick={closeModal}>
              Continue To Play
            </Button>
            <br />
          </>
        )}
      </div>
    </div>
  );
}
