import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';
import { Press_Start_2P } from 'next/font/google';

const press_Start_2P = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
});

export default function GameBanner() {
  return (
    <div className={styles.main_container}>
      <Image
        src="/games/game_banner.jpg"
        fill
        alt="game page banner"
      />
      <h1
        className={`${styles.header_text} ${press_Start_2P.className} text-xl md:text-4xl lg:text-7xl`}
      >
        World of Regen Word Games
      </h1>
    </div>
  );
}
