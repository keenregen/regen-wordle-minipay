import styles from './index.module.scss';
import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  size: '';
}

export default function index({ src, alt, size }: Props) {
  return (
    <div className={styles.main_container}>
      <Image fill src={src ?? '/team/lemon.png'} alt={alt ?? 'Avatar'}></Image>
    </div>
  );
}
