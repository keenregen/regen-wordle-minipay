import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './index.module.scss';

interface GameInformationModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameInformationModal({
  show,
  setShow,
}: GameInformationModalProps) {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} className={styles.main_container}>
      <Modal.Header closeButton>
        <Modal.Title>How To Play</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.content_container}>
        <h4>Guess the Correct Word in specific number of tries in maximum 3 mins.</h4>
        <ul>
          <li>First choose the number of letters and topic of the words to be guessed from the settings.</li>
          <li>Guess the correct word by typing in the letters.</li>
          <li>Press the enter key to submit your guess.</li>
          <li>You can see the remaining time below the letter buttons.</li>
          <li>Letters that are in the correct word and in the right position will be highlighted in green.</li>
          <li>
            Letters that are in the correct word but in the wrong position will be
            highlighted in yellow.
          </li>
          <li>
            Letters that are not in the correct word will be highlighted in gray.
          </li>

        </ul>
        <div className={styles.example_container}>
          <h4>Examples</h4>
          <div>
            <div className={styles.example1}>
              <div>F</div>
              <div>U</div>
              <div>N</div>
              <div>G</div>
              <div>I</div>
            </div>
            <p>F is in the correct word and in the correct spot.</p>
          </div>
          <div>
            <div className={styles.example2}>
              <div>F</div>
              <div>I</div>
              <div>B</div>
              <div>E</div>
              <div>R</div>
            </div>
            <p>I is in the correct word but in the wrong spot.</p>
          </div>
          <div>
            <div className={styles.example3}>
              <div>R</div>
              <div>E</div>
              <div>G</div>
              <div>E</div>
              <div>N</div>
            </div>
            <p>N is not in the correct word in any spot.</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-full flex justify-center">
          <Button
            variant="dark"
            onClick={handleClose}
            style={{ minWidth: '120px' }}
          >
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
