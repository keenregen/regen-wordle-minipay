import { Button } from 'react-bootstrap';
import styles from './index.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store';
import { setUser } from '../../../../../slices/authenticationSlice';
import { fetchUserInfo } from '../../../../../slices/userSlice';
import { setModalOpen } from '../../../../../slices/gameModalSlice';
import { DifficultyLevels } from '@src/constants/misc';
import { useRouter } from 'next/router';
interface Props {
  isMember: boolean;
  onHandleSetup: ({}: SetupConfigs) => void;
}

export interface SetupConfigs {
  difficulty: DifficultyLevels;
  isPractice: boolean;
}

const difficultyButtons = [
  {
    id: 'easy',
    name: 'EASY',
    link: 'easy',
  },
  {
    id: 'medium',
    name: 'MEDIUM',
    link: 'medium',
  },
  {
    id: 'hard',
    name: 'HARD',
    link: 'hard',
  },
];

export default function GameSetup({ isMember, onHandleSetup }: Props) {
  const [difficulty, setDifficulty] = useState<DifficultyLevels>('easy');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSetup = (isPractice: boolean) => {
    const setupConfigs: SetupConfigs = {
      difficulty: difficulty,
      isPractice: isPractice,
    };
    onHandleSetup(setupConfigs);
  };

  const logIn = async () => {
    if ((window as any).ethereum) {
      if ((window as any).ethereum.selectedAddress === null) {
        await (window as any).ethereum.request({
          method: 'eth_requestAccounts',
        });
        dispatch(setUser((window as any).ethereum.selectedAddress));
        dispatch(fetchUserInfo((window as any).ethereum.selectedAddress));
      }
    } else {
      dispatch(
        setModalOpen([
          'Attention',
          'The request was unsuccessful, is Metamask installed on your browser? If it is, try again. If you think that there is another problem, contact us.',
        ])
      );
    }
  };

  const handleBackToGames = () => {
    router.push('/games');
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper}>
        {isMember && (
          <div className={styles.difficulty_section}>
            <h3 className="text-center mb-4 text-white">
              Select the Difficulty Level
            </h3>
            <div className={styles.difficulty_buttons}>
              {difficultyButtons.map((button) => {
                return (
                  <Button
                    className={difficulty === button.id ? styles.active : ''}
                    key={button.id}
                    onClick={() =>
                      setDifficulty(button.link as DifficultyLevels)
                    }
                  >
                    {button.name}
                  </Button>
                );
              })}
            </div>
            <div className={styles.divider}></div>
          </div>
        )}
        <div className={styles.start_button_section}>
          {isMember ? (
            <div className="flex flex-column items-center">
              <h3 className="text-center mb-4 text-white">
                Practice, Play, Compete and Learn
              </h3>
              <div className="d-flex gap-4">
                <Button
                  className={styles.start_button}
                  onClick={() => handleSetup(true)}
                >
                  PRACTICE
                </Button>
                <Button
                  className={styles.start_button}
                  onClick={() => handleSetup(false)}
                >
                  START THE GAME
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-column items-center">
              <h3 className="text-center mb-4 text-white">
                Join the Challange First!
              </h3>
              <h4 className="text-center mb-4 text-base text-white m-0">
                To take part in the competition(s) and get an opportunity to
                earn reward(s), you need to be a member.
              </h4>
              {/* <Button className={styles.start_button} onClick={logIn}>
                CONNECT WALLET
              </Button> */}
            </div>
          )}
          <div className={styles.divider}></div>
          <div className=" flex flex-column items-center">
            <h4 className="text-center mb-4 text-base text-white m-0">Or</h4>
            <Button
              className={styles.back_button}
              onClick={() => handleBackToGames()}
            >
              BACK TO GAMES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

