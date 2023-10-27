import { CSSProperties, ReactNode } from 'react';
import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  theme?: 'light' | 'normal' | 'dark';
  style?: CSSProperties
}

export default function HomePageLayout(props: Props): JSX.Element {
  return (
    <div
      className={`${styles.main_container} ${
        props.theme && styles[props.theme]
      }`}
      style={props.style}
    >
      <div className={styles.wrapper}>{props.children}</div>
    </div>
  );
}
