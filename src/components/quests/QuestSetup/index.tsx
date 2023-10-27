import { Button } from 'react-bootstrap';
import styles from './index.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { setUser } from '@slices/authenticationSlice';
import { setModalOpen } from '@slices/gameModalSlice';
import { fetchUserInfo } from '@slices/userSlice';
import { AppDispatch } from '@store/index';
import { DifficultyLevels, EASY } from '@src/constants/misc';
import { SetupConfigs } from '@src/models/quest';
import { difficultyButtons } from '@src/constants/quests';

interface Props {
  isMember: boolean;
  onHandleSetup: ({}: SetupConfigs) => void;
  selectedQuest: string;
}

export default function QuestSetup({
  isMember,
  onHandleSetup,
  selectedQuest,
}: Props) {
  const [difficulty, setDifficulty] = useState<DifficultyLevels>(EASY);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSetup = (track: string) => {
    const setupConfigs: SetupConfigs = {
      difficulty: difficulty,
      track: track,
    };
    onHandleSetup(setupConfigs);
  };

  const handleBackToQuest = () => {
    router.push('/quests');
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
                    onClick={() => setDifficulty(button.link)}
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
                Start, Play, Compete and Learn
              </h3>
              <Button
                className={styles.start_button}
                onClick={() => handleSetup('')}
              >
                START THE QUEST
              </Button>
            </div>
          ) : (
            <div className="flex flex-column items-center">
              <h3 className="text-center mb-4 text-white">
                Join the Challenge First!
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
              className={styles.practice_button}
              onClick={() => handleBackToQuest()}
            >
              BACK TO QUESTS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
