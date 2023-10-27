import React from 'react';
import styles from './index.module.scss';

interface Props {
  questionText: string;
}

export default function QuestionSection({ questionText }: Props) {
  return (
    <div className={`${styles.main_container}`}>
      <p className="text-lg md:text:xl lg:text-3xl text-center">{questionText}</p>
    </div>
  );
}
