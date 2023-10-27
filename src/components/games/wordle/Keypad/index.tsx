import { CharColor } from '@src/models/char';
import styles from './index.module.scss';
import { MouseEventHandler } from 'react';
import { letters } from '@src/constants/letters';

interface Props {
  usedKeys: CharColor;
  onHandleClick: (val: string) => void;
}

type Char = { key: string };

export default function Keypad({ usedKeys, onHandleClick }: Props) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onHandleClick((event.target as HTMLButtonElement).value);
  };
  return (
    <div className={styles.keypad}>
      {letters.map((item: Char) => {
        const color = usedKeys[item.key];
        return (
          <button
            key={item.key}
            value={item.key}
            onClick={handleClick}
            className={`${styles.letter_item} ${styles[color]} ${
              item.key === 'Enter' || item.key === 'Backspace'
                ? styles.long_letter_item
                : ''
            }`}
          >
            {item.key === 'Backspace'
              ? 'Back'
              : item.key[0].toLocaleUpperCase() + item.key.slice(1)}
          </button>
        );
      })}
    </div>
  );
}
