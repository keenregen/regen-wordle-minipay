import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setModalOpen } from '../../slices/gameModalSlice';
import { CharColor, CharObj } from '@src/models/char';
import { getTurnsOnSolutionLength } from '@src/utils/getTurns';

const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [guesses, setGuesses] = useState([...Array()]); // each guess is an array
  const [history, setHistory] = useState<string[]>([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [usedKeys, setUsedKeys] = useState<CharColor>({}); // {a: 'grey', b: 'green', c: 'yellow'} etc
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector(
    (state: RootState) => state.gameModalSlice.isModalOpen
  );
  useEffect(() => {
    const solutionLength = getTurnsOnSolutionLength(solution.length);
    setGuesses([...Array(solutionLength)]);
  }, [solution]);

  const onGameReset = () => {
    setIsCorrect(false);
    setCurrentGuess('');
    setHistory([]);
    setGuesses((prev) => [...Array(prev.length)]);
    setTurn(0);
    setUsedKeys({});
  };

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = (): CharObj[] => {
    let solutionArray = [...solution];
    let comparedGuess = [...currentGuess].map((item: string) => {
      return { key: item, color: 'grey' };
    });

    // find any green letters
    comparedGuess.forEach((item, i) => {
      if (solution[i] === item.key) {
        comparedGuess[i].color = 'green';
        solutionArray[i] = '';
      }
    });

    // find any yellow letters
    comparedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== 'green') {
        comparedGuess[i].color = 'yellow';
        solutionArray[solutionArray.indexOf(l.key)] = '';
      }
    });

    return comparedGuess;
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formattedGuess: CharObj[]) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses: CharObj[][]) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory: string[]) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn: number) => {
      return prevTurn + 1;
    });
    setUsedKeys((prevUsedKeys: CharColor) => {
      formattedGuess.forEach((char) => {
        const currentColor: string = prevUsedKeys[char.key];

        if (char.color === 'green') {
          prevUsedKeys[char.key] = 'green';
          return;
        }
        if (char.color === 'yellow' && currentColor !== 'green') {
          prevUsedKeys[char.key] = 'yellow';
          return;
        }
        if (char.color === 'grey' && currentColor !== ('green' || 'yellow')) {
          prevUsedKeys[char.key] = 'grey';
          return;
        }
      });

      return prevUsedKeys;
    });
    setCurrentGuess('');
  };

  // handle keyup event & track current guess
  // if user presses enter, add the new guess

  interface Props {
    key: string;
  }

  const handleKeyup = ({ key }: Props) => {
    if (key === 'Enter') {
      // only add guess if turn is less than 5
      if (turn > guesses.length - 1) {
        console.log('dbg');
        dispatch(setModalOpen(['Attention', 'You used all your guesses.']));
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        dispatch(
          setModalOpen([
            'Attention',
            "Don't repeat yourself. This guess is already there.",
          ])
        );
        return;
      }
      // check word is 5 chars
      if (currentGuess.length !== solution.length) {
        dispatch(
          setModalOpen([
            'Attention',
            'All of the squares in a row should be guesssed.',
          ])
        );
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < solution.length) {
        setCurrentGuess((prev) => prev + key.toLowerCase());
      }
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    handleKeyup,
    onGameReset,
  };
};

export default useWordle;
