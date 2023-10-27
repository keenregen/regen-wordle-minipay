
import React from 'react';
import styles from './index.module.scss';
import GameBanner from '@src/components/games/shared/GameBanner';
import GameList from '@src/components/games/shared/GameList';

export default function Games() {
  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper}>
        <GameBanner />
        <GameList />
      </div>
    </div>
  );
}
