import React, { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { Press_Start_2P } from 'next/font/google';
import Link from 'next/link';
import { Modal, Button } from 'react-bootstrap';
import { games } from '@src/constants/game';

const press_Start_2P = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
});

export default function GameList() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper}>
        {games.map((game) => {
          return (
            <Link
              href={game.disabled === false ? `games/${game.link}` : `games`}
              key={game.name}
              onClick={() => {
                game.disabled && setOpen(true);
              }}
              className={styles.game_card_container}
            >
              <div className={styles.image_container}>
                <Image src={game.image} fill alt={game.name}></Image>
              </div>
              <div className={styles.text_container}>
                <h2 className={`${press_Start_2P.className} `}>{game.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
      <Modal show={open} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Coming Soon!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We are preparing this game. Wait for it!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
