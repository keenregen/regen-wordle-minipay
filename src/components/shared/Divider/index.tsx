import styles from './index.module.scss';

interface Props {
  variant: 'variant1' | 'variant2' | 'variant3';
}

export default function index({ variant }: Props) {
  return (
    <div className={styles.main_container}>
      {variant === 'variant1' && (
        <div className={styles.divider_1}>
          <div className={styles.first_line}></div>
          <div className={styles.second_line}></div>
          <div className={styles.third_line}></div>
        </div>
      )}
      {variant === 'variant2' && (
        <div className={styles.divider_2}>
          <div className={styles.first_line}></div>
          <div className={styles.second_line}></div>
        </div>
      )}
      {variant === 'variant3' && (
        <div className={styles.divider_3}>
          <div className={styles.first_line}></div>
        </div>
      )}
    </div>
  );
}
