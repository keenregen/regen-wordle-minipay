import { GetStaticProps } from 'next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import GameSetup, {
  SetupConfigs,
} from '@src/components/games/wordle/GameSetup';
import PracticeGameLayout from '@src/components/games/wordle/PracticeGameLayout';
import { EASY } from '@src/constants/misc';
import { fetcher } from '@src/utils/fetcher';
// import GameLayout from '@src/components/games/wordle/GameLayout';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const wordsData = await fetcher(
      'https://regenwise.xyz/api/words?difficulty=easy'
    );
    return { props: { wordsData } };
  } catch (error) {
    return {
      props: {
        wordsData: null,
      },
    };
  }
};

interface Props {
  wordsData: string;
}
export default function Wordle(props: Props) {
  const [isSetupCompleted, setsIsSetupCompleted] = useState(false);
  const [setupConfigs, setSetupConfigs] = useState({
    isPractice: true,
    difficulty: EASY,
  } as SetupConfigs);
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentication.user
  );

  const prepareGame = (setupConfig: SetupConfigs) => {
    setSetupConfigs(setupConfig);
    setsIsSetupCompleted(true);
  };

  return (
    <div
      className={`flex flex-1 first-letter:flex flex-col items-center bg-black`}
    >
      <div className="flex flex-1 w-full justify-center">
        <PracticeGameLayout setupConfigs={setupConfigs as SetupConfigs} />
        {/* <GameLayout setupConfigs={setupConfigs as SetupConfigs} /> */}
        {/* <GameSetup
            isMember={isAuthenticated ? true : false}
            onHandleSetup={prepareGame}
          /> */}
      </div>
    </div>
  );
}
