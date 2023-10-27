import React, { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { Press_Start_2P } from 'next/font/google';
import Link from 'next/link';
import { quests } from '@src/constants/quests';
import { Modal, Button } from 'react-bootstrap';

const press_Start_2P = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
});

export default function QuestList() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.wrapper}>
        {quests.map((quest) => {
          return (
            <Link
              href={quest.disabled === false ? `quests/${quest.link}` : `quests`}
              key={quest.name}
              onClick={() => {
                quest.disabled && setOpen(true);
              }}
              className={styles.quest_card_container}
            >
              <div className={styles.image_container}>
                <Image src={quest.image} fill alt={quest.name}></Image>
              </div>
              <div className={styles.text_container}>
                <p className={`${press_Start_2P.className} `}>{quest.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <Modal show={open} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Coming Soon!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We are preparing this quest. Wait for it!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
