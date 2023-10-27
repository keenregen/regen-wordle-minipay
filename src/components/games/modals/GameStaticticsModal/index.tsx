import TableTemplate from '@src/components/dashboard/Stats/shared/TableTemplate';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

interface GameStaticticsModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const playerRanking = [
  {
    ranking: 1,
    id: '0xabc123',
    nickname: 'Player1',
    points: 1000,
  },
  {
    ranking: 2,
    id: '0xdef456',
    nickname: 'Player2',
    points: 950,
  },
  {
    ranking: 3,
    id: '0xghi789',
    nickname: 'Player3',
    points: 900,
  },
  {
    ranking: 4,
    id: '0xjkl012',
    nickname: 'Player4',
    points: 870,
  },
  {
    ranking: 5,
    id: '0xmnop34',
    nickname: 'Player5',
    points: 820,
  },
  {
    ranking: 6,
    id: '0xyza56',
    nickname: 'This_Is_Me',
    points: 800,
  },
  {
    ranking: 7,
    id: '0xqrs78',
    nickname: 'Player7',
    points: 780,
  },
  {
    ranking: 8,
    id: '0xwxyz90',
    nickname: 'Player8',
    points: 750,
  },
  {
    ranking: 9,
    id: '0x123abc',
    nickname: 'Player9',
    points: 720,
  },
  {
    ranking: 10,
    id: '0x456def',
    nickname: 'Player10',
    points: 700,
  },
];

export default function GameStaticticsModal({
  show,
  setShow,
}: GameStaticticsModalProps) {
  const handleClose = () => setShow(false);

  const tableHeaders = [
    {
      id: 'id',
      title: 'Public ID',
    },
    {
      id: 'nickname',
      title: 'Nickname',
    },
    {
      id: 'points',
      title: 'Points',
    },
  ];
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Game Statistics</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TableTemplate
          rankingToHighlight={6}
          data={playerRanking}
          columns={tableHeaders}
          tableHeader="Rankings of the Month"
          buttonLabel="Select The Quest"
        />
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
