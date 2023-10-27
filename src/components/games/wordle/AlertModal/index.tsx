import { useSelector, useDispatch } from 'react-redux';
import { setModalClose } from '../../../../../slices/gameModalSlice';
import { RootState, AppDispatch } from '../../../../../store';
import styles from './index.module.scss';
import { Button } from 'react-bootstrap';
import { useCallback, useRef } from 'react';

export default function AlertModal() {
  const buttonRef = useRef(null);
  const isModalOpen = useSelector(
    (state: RootState) => state.gameModalSlice.isModalOpen
  );
  const modalContent = useSelector(
    (state: RootState) => state.gameModalSlice.modalContent[1]
  );
  const modalTitle = useSelector(
    (state: RootState) => state.gameModalSlice.modalContent[0]
  );
  const dispatch = useDispatch<AppDispatch>();
  const closeModal = useCallback(() => {
    dispatch(setModalClose());
  }, [dispatch]);

  if (!isModalOpen) return <></>;
  return (
    <div className={styles.main_container}>
      <div className="flex flex-col justify-center">
        {
          <>
            <h1 className="text-center pb-4 text-2xl md:text-4xl font-extrabold text-red-700">
              {modalTitle}
            </h1>
            <p className="pb-2 text-center">
              <span className={styles.solution}>{modalContent}</span>
            </p>
          </>
        }
        <Button variant="dark" onClick={closeModal}>
          Close
        </Button>
      </div>
    </div>
  );
}
