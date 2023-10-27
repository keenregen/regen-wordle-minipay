import { CharObj } from '@src/models/char';
import Row from './Row';

interface Props {
  guesses: CharObj[][];
  currentGuess: string;
  turn: number;
  wordLength: number;
}

export default function Grid({ guesses, currentGuess, turn, wordLength }: Props) {
  return (
    <div>
      {guesses.map((g, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} wordLength={wordLength} />;
        }
        return <Row key={index} guess={g} wordLength={wordLength} />;
      })}
    </div>
  );
}
