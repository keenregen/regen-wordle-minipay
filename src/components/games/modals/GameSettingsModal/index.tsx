import { setLetters, setSubject } from '@slices/gameModalSlice';
import { AppDispatch } from '@store/index';
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

interface GameSettingsModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameSettingsModal({
  show,
  setShow,
}: GameSettingsModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const handleClose = () => setShow(false);
  const [configs, setConfigs] = useState({
    letters: 'five',
    subject: 'environmental',
  });
  const handleSave = () => {
    console.log(configs);
    dispatch(setLetters(configs.letters));
    dispatch(setSubject(configs.subject));
    handleClose();
  };

  const handleForm = (key: any, value: any) => {
    setConfigs({ ...configs, [key]: value });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>Number of Letters in the Words:</p>
            <Form className="flex flex-row">
              {['three', 'four', 'five', 'six'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    checked={configs.letters === type}
                    label={type.charAt(0).toLocaleUpperCase() + type.slice(1)}
                    onChange={() => handleForm('letters', type)}
                    name="group1"
                    type={'radio'}
                    id={`inline-${type}-${type}}`}
                  />
                </div>
              ))}
            </Form>
          </div>
          <div>
            <p>Topic of the Words:</p>
            <Form className="flex flex-row">
              {['environmental', 'blockchain'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    checked={configs.subject === type}
                    onChange={(e) => handleForm('subject', type)}
                    label={type.charAt(0).toLocaleUpperCase() + type.slice(1)}
                    name="group1"
                    type={'radio'}
                    id={`inline-${type}-${type}}`}
                  />
                </div>
              ))}
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
