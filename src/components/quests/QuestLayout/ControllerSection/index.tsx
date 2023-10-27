import React from 'react';
import styles from './index.module.scss';

interface Props {
  totalNumberOfQuestions: number;
  currentQuestion: number;
}

export default function ControllerSection({
  totalNumberOfQuestions,
  currentQuestion,
}: Props) {
  return (
    <div className={styles.main_container}>
      <p>{`${currentQuestion + 1} / ${totalNumberOfQuestions}`}</p>
    </div>
  );
}
