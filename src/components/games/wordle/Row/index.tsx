import styles from './index.module.scss';
import AlertModal from '../AlertModal';
import { CharObj } from '@src/models/char';

interface Props {
  guess?: CharObj[];
  currentGuess?: string;
  wordLength: number;
}

export default function Row({ guess, currentGuess, wordLength }: Props) {
  if (guess) {
    return (
      <div className={styles.row}>
        {guess.map((item, i) => (
          <div key={i} className={`${styles[item.color]} ${styles.row_item}`}>
            {item.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split('');

    return (
      <div className={`${styles.row} ${styles.current}`}>
        {letters.map((letter, i) => (
          <div key={i} className={`${styles.row_item} ${styles.filled}`}>
            {letter}
          </div>
        ))}
        {[...Array(wordLength - letters.length)].map((_, i) => (
          <div className={`${styles.row_item}`} key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.row}>
      {new Array(wordLength).fill(null).map((_, index) => {
        return <div key={index} className={`${styles.row_item}`}></div>;
      })}
      <AlertModal />
    </div>
  );
}
