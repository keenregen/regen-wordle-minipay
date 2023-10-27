import styles from './index.module.scss';

interface Props {
  theme: 'dark' | 'light';
  loadingMessage: string;
}

export default function Loading({ theme, loadingMessage }: Props) {
  return (
    <div className={`${styles.main_container}`}>
      <h2
        className={`${styles.header} ${
          theme === 'dark' ? 'text-black' : 'text-white'
        } md:text-5xl mb-8 font-extrabold text-center`}
      >
        {loadingMessage.toUpperCase()}
      </h2>
      <div className={styles.wrapper}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
